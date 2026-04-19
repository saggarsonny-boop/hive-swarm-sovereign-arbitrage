import Link from 'next/link'

const ENGINES = [
  {
    slug: 'regime-scanner',
    name: 'Regime Scanner',
    icon: '🔭',
    tagline: 'Detect the macro regime before the crowd does',
    desc: 'Classify current market conditions — risk-on, risk-off, stagflation, deflation — using cross-asset signals.',
  },
  {
    slug: 'dislocation-finder',
    name: 'Dislocation Finder',
    icon: '⚡',
    tagline: 'Find where price has broken from value',
    desc: 'Spot assets trading far from fair value using momentum divergence, vol-adjusted spreads, and cross-market anomalies.',
  },
  {
    slug: 'catalyst-decoder',
    name: 'Catalyst Decoder',
    icon: '🧨',
    tagline: 'Decode the event before the market prices it',
    desc: 'Analyse scheduled macro events, earnings, policy meetings, and geopolitical triggers for asymmetric setup potential.',
  },
  {
    slug: 'narrative-tracker',
    name: 'Narrative Tracker',
    icon: '📡',
    tagline: 'Track the story the market is telling itself',
    desc: 'Identify dominant market narratives, detect narrative shifts early, and find positions that benefit from the rotation.',
  },
  {
    slug: 'flow-reader',
    name: 'Flow Reader',
    icon: '🌊',
    tagline: 'See where the smart money is moving',
    desc: 'Interpret options positioning, dark pool prints, futures open interest, and institutional flow patterns.',
  },
  {
    slug: 'volatility-architect',
    name: 'Volatility Architect',
    icon: '🌪️',
    tagline: 'Trade volatility, not just direction',
    desc: 'Design vol-sensitive structures — straddles, calendars, ratios — calibrated to current term structure and skew.',
  },
  {
    slug: 'correlation-breaker',
    name: 'Correlation Breaker',
    icon: '🔗',
    tagline: 'Find the diversifier that actually diversifies',
    desc: 'Identify assets and strategies with genuine low correlation to your existing book across different regime states.',
  },
  {
    slug: 'tail-hedge-builder',
    name: 'Tail Hedge Builder',
    icon: '🛡️',
    tagline: 'Protect the downside without killing the upside',
    desc: 'Design cost-efficient tail hedges — convex, not just expensive — tuned to your portfolio\'s specific risk profile.',
  },
  {
    slug: 'thesis-stress-tester',
    name: 'Thesis Stress Tester',
    icon: '🧪',
    tagline: 'Find the holes before the market does',
    desc: 'Challenge your investment thesis with adversarial scenarios, second-order effects, and historical analogue breaks.',
  },
  {
    slug: 'position-sizer',
    name: 'Position Sizer',
    icon: '⚖️',
    tagline: 'Size for survival and upside, not hope',
    desc: 'Kelly-informed, drawdown-aware position sizing that accounts for edge confidence, correlation, and max acceptable loss.',
  },
]

export default function HomePage() {
  return (
    <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-16">
      <div className="mb-16">
        <p className="text-xs tracking-widest text-zinc-500 uppercase mb-4">Hive · Sovereign Arbitrage</p>
        <h1 className="text-3xl font-bold text-zinc-100 mb-4">Ten engines for asymmetric advantage.</h1>
        <p className="text-zinc-400 text-base max-w-xl">
          Sovereign signals. Institutional-grade thinking. No agenda, no ads, no investors.
          Each engine gives you one edge — together they give you the full picture.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {ENGINES.map(engine => (
          <Link
            key={engine.slug}
            href={`/${engine.slug}`}
            className="group block bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-600 transition-colors"
          >
            <div className="flex items-start gap-4">
              <span className="text-2xl flex-shrink-0 mt-0.5">{engine.icon}</span>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-sm font-semibold text-zinc-100 group-hover:text-white">{engine.name}</h2>
                </div>
                <p className="text-xs text-zinc-500 mb-2 italic">{engine.tagline}</p>
                <p className="text-xs text-zinc-400 leading-relaxed">{engine.desc}</p>
              </div>
              <span className="text-zinc-700 group-hover:text-zinc-500 transition-colors ml-auto flex-shrink-0">→</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-zinc-800 text-center">
        <p className="text-xs text-zinc-600">
          Sovereign Arbitrage · Part of the <a href="https://hive.baby" className="text-zinc-500 hover:text-zinc-400 underline">Hive ecosystem</a>
        </p>
      </div>
    </main>
  )
}
