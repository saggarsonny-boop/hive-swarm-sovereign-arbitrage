import ArbEngineShell from '@/components/ArbEngineShell'

const ENGINE = {
  slug: 'catalyst-decoder',
  name: 'Catalyst Decoder',
  icon: '🧨',
  tagline: 'Decode the event before the market prices it',
  placeholder: 'Describe the catalyst — FOMC meeting, earnings, election, regulatory event…',
  demoInput: 'Fed meeting next week. Market pricing 0 cuts. What are the asymmetric setups?',
  demoOutput: `Catalyst: FOMC — asymmetric setup analysis.

What the market is pricing: 0 cuts, hawkish hold, no change to dot plot. Terminal rate ~5.25% through year-end.

Base case (60%): Hold, neutral language. Markets shrug. Vol compresses post-event. No setup here.

Bull case (20%): Dovish tilt — any language softening on "higher for longer," acknowledgment of cooling data. 2y Treasury -15-20bp, equities +1.5%, dollar -0.8%.

Bear case (20%): Hike signal or re-acceleration language. 2y +20bp, equities -2%, VIX spike.

Non-consensus read: The options market is pricing Vol too cheaply for a binary 20/20 tail. 1-week straddles on TLT or SPY are underpriced relative to the distribution of outcomes.

The asymmetric setup: Long vol into the event (straddle or strangle), not directional. The market is complacent — it's pricing a non-event. One sentence in the statement changes everything.

Timing: Enter 3-4 days pre-meeting when vol is lowest. Exit same day. Don't hold through the subsequent presser unless conviction is very high.

Key trigger to watch: Any mention of "neutral rate" adjustment — that's the market-mover.`,
}

export default function Page() {
  return <ArbEngineShell engine={ENGINE} />
}
