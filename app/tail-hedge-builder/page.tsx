import ArbEngineShell from '@/components/ArbEngineShell'

const ENGINE = {
  slug: 'tail-hedge-builder',
  name: 'Tail Hedge Builder',
  icon: '🛡️',
  tagline: 'Protect the downside without killing the upside',
  placeholder: 'Describe your portfolio and the tail risk you want to hedge…',
  demoInput: '$2M long equity portfolio, mostly S&P 500. Worried about a -30% drawdown. How do I hedge efficiently?',
  demoOutput: `Portfolio: $2M long equity. Target hedge: -30% drawdown protection.

The expensive mistake: Buying ATM puts outright. At current vol (VIX 14), a 12-month 5% OTM put on SPY costs ~$8,500 per contract (100 shares). Full hedge = prohibitive. Drag kills returns in non-crisis years.

Efficient structures:

1. Put spread (1x2 or 1x3 ratio) — RECOMMENDED
   Buy 1x SPY 5% OTM put, sell 2x 20% OTM put
   Net cost: Near zero or small credit
   Protection: Full between -5% and -20%
   Gives up: Protection beyond -20% (but you're still long equity below that — this is a soft floor)
   Annual drag: <0.2%

2. SPX 6-month rolling put ladder
   Buy 3-month puts, roll every 3 months
   Target: 10% OTM (catching -10% to -30% range)
   Cost: ~0.8-1.2% per year of portfolio value
   Realistic for an ongoing programme

3. VIX call spread
   Buy VIX 20 call, sell VIX 40 call, 3-month expiry
   Cost: ~$800 per spread
   Payoff: Peaks if VIX goes to 30-35 (typical in -20% drawdown)
   Doesn't protect against slow grind lower (VIX stays low while equities fall)

4. Correlation hedge: Long gold (5-7% allocation)
   Not a pure hedge but provides uncorrelated returns in equity stress
   No theta decay, positive expected carry over time

For $2M portfolio: Recommended combination:
· Put spread programme on $1.5M notional (~$3,000/year)
· Gold ETF 7% allocation ($140K)
· Total cost: ~0.3% per year

This hedges a -30% scenario to approximately -18% actual portfolio drawdown. That's worth the cost.`,
}

export default function Page() {
  return <ArbEngineShell engine={ENGINE} />
}
