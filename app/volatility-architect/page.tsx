import ArbEngineShell from '@/components/ArbEngineShell'

const ENGINE = {
  slug: 'volatility-architect',
  name: 'Volatility Architect',
  icon: '🌪️',
  tagline: 'Trade volatility, not just direction',
  placeholder: 'Describe the asset, your vol view, and current term structure if known…',
  demoInput: 'SPX implied vol looks cheap at VIX 14. I think something happens in 60 days. How do I structure this?',
  demoOutput: `Vol setup: Long vol, 60-day horizon, VIX at 14.

Context: VIX at 14 = 23rd percentile historically. The vol surface is pricing complacency. Realised vol (20-day) at ~10 makes the vol risk premium (VRP) unusually wide — selling vol has been very profitable, hence the suppression. Mean reversion is due.

Structure options:

1. Simple long straddle (ATM, 60 DTE)
   Cost: ~2.8% of notional (SPX at ~5000 = ~$140 straddle)
   Break-even: ±2.8% move by expiry
   Risk: Theta decay ~$8/day. Loses if nothing happens.

2. Calendar spread (buy 60-day ATM, sell 30-day ATM)
   Cost: ~40% cheaper than outright straddle
   Best if: Vol spike happens in 30-60 day window, not immediately
   Risk: Complex — short gamma in near-term

3. 1x2 call ratio (buy 1 ATM call, sell 2 OTM calls) — skew play
   Cost: Near zero or small credit
   Best if: Moderate move up, not explosive rally
   Risk: Uncapped loss above the 2x short strikes

Recommended for your thesis: Simple long straddle or ATM call + OTM put (risk reversal for directional lean). At VIX 14, paying for vol is cheap historically. The theta cost (~$8/day for SPX) is the price of admission.

Key greeks: Delta ~0, Gamma +, Theta -, Vega +. You need realised vol to exceed implied (14) or a vol spike. Even a vol jump to 18 with no movement is profitable.

Sizing: 1% portfolio risk. At 2.8% cost, that means max 35% notional allocation. Don't oversize — theta kills you if you're wrong on timing.`,
}

export default function Page() {
  return <ArbEngineShell engine={ENGINE} />
}
