import ArbEngineShell from '@/components/ArbEngineShell'

const ENGINE = {
  slug: 'flow-reader',
  name: 'Flow Reader',
  icon: '🌊',
  tagline: 'See where the smart money is moving',
  placeholder: 'Describe flow signals you are seeing — options activity, futures positioning, fund flows…',
  demoInput: 'Large call buying in XLE (energy ETF), unusual put buying in XLF (financials). What does this suggest about positioning?',
  demoOutput: `Flow read: Sector rotation signal with macro overlay.

XLE call buying:
· Directional or hedge? At current energy equity implied vols (~28%), large call buying is typically directional — not hedging existing longs
· Likely thesis: Energy outperformance in late-cycle/inflationary regime. Oil service names benefit most
· Sophistication level: ETF-level flow is less precise than single-name. Institutional money uses XLE for speed/liquidity, not conviction

XLF put buying:
· Classic defensive hedge on a financial sector that's rate-sensitive
· Could be: existing long hedging against rate vol, or new short thesis (commercial real estate stress, regional bank exposure)
· More interesting signal than XLE — put buying in financials historically precedes credit spread widening by 4-6 weeks

Combined read: The trade is not "buy energy, short financials" — it's "buy energy because rates stay high, hedge financials because high rates eventually break credit."

This is a late-cycle positioning playbook.

Cleaner setup: Rather than chasing ETF-level flow, look at single-name financials with high CRE exposure (regional banks) — the put buyers there have specific thesis, not just sector macro.

What to watch: Credit default swap spreads on regional banks. When they start moving, the put buyers were right.`,
}

export default function Page() {
  return <ArbEngineShell engine={ENGINE} />
}
