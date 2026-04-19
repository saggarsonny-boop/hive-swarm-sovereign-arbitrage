import ArbEngineShell from '@/components/ArbEngineShell'

const ENGINE = {
  slug: 'regime-scanner',
  name: 'Regime Scanner',
  icon: '🔭',
  tagline: 'Detect the macro regime before the crowd does',
  placeholder: 'Describe current macro conditions, or paste recent market data / headlines…',
  demoInput: 'US 10y yield at 4.8%, DXY at 106, gold breaking out, equities flat, credit spreads widening. What regime are we in?',
  demoOutput: `Regime: Late-cycle tightening → early stress transition.

Current state: Risk-off accumulation phase. Not yet panic, but the pre-conditions are aligned.

Key signals:
· Real rates positive and rising (10y real ~2.1%) — restrictive, not just tight
· Gold bid despite strong dollar = sovereign/systemic hedge demand, not just inflation
· Credit spreads leading equities (as they always do) — watch HY OAS, now ~380bp
· Equity flatness with vol suppressed = distribution, not accumulation

Historical analogue: H2 2018 (pre-Q4 drawdown), early 2000 (pre-dot-com peak). In both cases equities lagged the credit/rate signal by 4–8 weeks.

Duration estimate: 6–12 weeks before resolution (capitulation or policy pivot).

Asset implications: Short duration risk assets, long gold/vol, reduce credit exposure, favour defensive sectors and cash equivalents. The yen as a hedge is underpriced here.

Key invalidation: Fed pivot signal or credit spreads tightening through 320bp.`,
}

export default function Page() {
  return <ArbEngineShell engine={ENGINE} />
}
