'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface EngineConfig {
  slug: string
  name: string
  icon: string
  tagline: string
  placeholder: string
  demoInput: string
  demoOutput: string
}

export default function ArbEngineShell({ engine }: { engine: EngineConfig }) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [demoVisible, setDemoVisible] = useState(false)
  const [typedInput, setTypedInput] = useState('')
  const [typingDone, setTypingDone] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const key = `hive_demo_${engine.slug}`
    if (!localStorage.getItem(key)) {
      setDemoVisible(true)
    }
  }, [engine.slug])

  // Typewriter effect for demo input
  useEffect(() => {
    if (!demoVisible) return
    setTypedInput('')
    setTypingDone(false)
    let i = 0
    const interval = setInterval(() => {
      i++
      setTypedInput(engine.demoInput.slice(0, i))
      if (i >= engine.demoInput.length) { clearInterval(interval); setTypingDone(true) }
    }, 28)
    return () => clearInterval(interval)
  }, [demoVisible, engine.demoInput])

  function dismissForever() {
    localStorage.setItem(`hive_demo_${engine.slug}`, '1')
    setDemoVisible(false)
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  async function handleSend() {
    if (!input.trim() || loading) return
    const userMsg = input.trim()
    const newMessages: Message[] = [...messages, { role: 'user', content: userMsg }]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/arb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ engine: engine.slug, messages: newMessages }),
      })
      const data = await res.json()
      const reply = data.reply ?? data.error ?? 'Something went wrong.'
      setMessages([...newMessages, { role: 'assistant', content: reply }])
    } catch {
      setMessages([...newMessages, { role: 'assistant', content: 'Connection failed. Try again.' }])
    } finally {
      setLoading(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      {/* Header */}
      <div className="border-b border-zinc-800 bg-zinc-900">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-xl">{engine.icon}</span>
              <h1 className="text-zinc-100 font-bold text-base">{engine.name}</h1>
            </div>
            <p className="text-zinc-500 text-xs">{engine.tagline}</p>
          </div>
          <Link
            href="/"
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors flex-shrink-0"
          >
            ← All engines
          </Link>
        </div>
      </div>

      {/* Demo banner */}
      {demoVisible && (
        <div className="bg-zinc-900 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-zinc-500 uppercase tracking-widest">Live example</p>
              <button onClick={() => setDemoVisible(false)} className="text-zinc-600 hover:text-zinc-400 text-lg leading-none">×</button>
            </div>
            <div className="flex justify-end mb-2">
              <div className="bg-amber-400 text-zinc-900 px-4 py-2 rounded-xl text-sm max-w-2xl font-mono">
                {typedInput}{!typingDone && <span className="animate-pulse">▌</span>}
              </div>
            </div>
            <div className="bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-200 max-w-2xl whitespace-pre-wrap leading-relaxed">
              {engine.demoOutput}
            </div>
            <div className="mt-3 flex items-center gap-4">
              <button onClick={dismissForever} className="text-xs text-zinc-600 hover:text-zinc-400 underline underline-offset-2">
                Don&apos;t show me this demo again
              </button>
              <span className="text-zinc-800 text-xs">·</span>
              <button onClick={() => setDemoVisible(false)} className="text-xs text-zinc-600 hover:text-zinc-400">
                Hide for now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto py-6">
        <div className="max-w-3xl mx-auto px-6 space-y-4">
          {messages.length === 0 && !demoVisible && (
            <div className="text-center mt-24">
              <span className="text-5xl mb-4 block">{engine.icon}</span>
              <p className="text-zinc-500 text-sm">{engine.tagline}</p>
              <p className="text-zinc-600 text-xs mt-2">Type your setup below.</p>
            </div>
          )}
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-2xl px-4 py-3 rounded-xl text-sm whitespace-pre-wrap leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-amber-400 text-zinc-900'
                    : 'bg-zinc-900 text-zinc-100 border border-zinc-700'
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-zinc-900 border border-zinc-700 text-zinc-500 px-4 py-3 rounded-xl text-sm">
                Analysing…
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-zinc-800 bg-zinc-900">
        <div className="max-w-3xl mx-auto px-6 py-4 flex gap-3">
          <textarea
            className="flex-1 bg-zinc-950 border border-zinc-700 text-white rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-400 resize-none placeholder-zinc-600"
            rows={3}
            placeholder={engine.placeholder}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="bg-amber-400 hover:bg-amber-300 disabled:opacity-40 text-zinc-900 font-bold px-5 rounded-xl transition text-sm"
          >
            Run
          </button>
        </div>
        <p className="text-center text-xs text-zinc-700 pb-3">
          Sovereign Arbitrage · Part of <a href="https://hive.baby" className="hover:text-zinc-500">Hive</a> · No ads · No agenda
        </p>
      </div>
    </div>
  )
}
