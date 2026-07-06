import ArbEngineShell from '@/components/ArbEngineShell'

const ENGINE = {
  slug: 'correlation-breaker',
  name: 'Correlation Breaker',
  icon: '🔗',
  tagline: 'Find the diversifier that actually diversifies',
  placeholder: 'Describe your portfolio or the exposure you need to diversify…',
  demoInput: 'Long US equities, long investment grade credit, long USD. Where do I actually get diversification?',
  demoOutput: `Portfolio read: You are long the "everything is fine" trade three ways.

US equities + IG credit + USD = all positively correlated in a risk-off shock. In 2022, all three lost simultaneously. In March 2020, same. This is not a diversified book.

False diversifiers to avoid:
· International equities: 0.85+ correlation to US in crises
· High yield: more correlated to equities than IG in stress
· REITs: rate-sensitive + equity beta = same problem

Genuine diversifiers across regime states:

1. Long volatility (VIX calls or variance swaps): Negative correlation to equities (-0.7 to -0.9 in drawdowns). Cost: ~1% annualised carry drag. Essential, not optional.

2. Trend-following / managed futures: Works in trending regimes (up or down). 2022 was the proof — CTAs up 20%+ while everything else fell. Low correlation to equity beta: ~0.05.

3. Physical gold: Genuine safe haven in USD debasement + geopolitical risk. Correlation to IG credit: ~0.1. To equities: ~0.0 over full cycles.

4. Short-duration USD cash / T-bills: Not exciting, but genuinely uncorrelated and accruing positive carry now.

5. Macro hedge funds: Discretionary global macro has 0.1-0.2 correlation to equities over 10y periods.

Portfolio prescription: Add 5% long vol, 10% trend/CTA exposure, 5% gold. You've just cut your max drawdown in a 2022-style event by ~35% with <2% expected return drag.

The uncomfortable truth: True diversification costs something in bull markets. That's what you're buying.`,
}

export default function Page() {
  return <ArbEngineShell engine={ENGINE} />
}



<!-- Stripe Checkout Block -->
<div id="stripe-checkout-cta" style="margin: 2rem auto; padding: 2rem; border-radius: 12px; background: rgba(59,130,246,0.05); border: 1px solid rgba(59,130,246,0.2); text-align: center; font-family: sans-serif; max-width: 600px;">
    <h3 style="margin-top: 0; color: #fff;">Activate Premium License</h3>
    <p style="color: #9ca3af; font-size: 0.95rem; margin-bottom: 1.5rem;">Get instant access to all advanced capabilities and integration features.</p>
    <a href="https://buy.stripe.com/6oU00lb2L6F37bIazv0RG0J" target="_blank" style="display: inline-block; padding: 0.8rem 2rem; background: #3b82f6; color: #fff; font-weight: bold; border-radius: 8px; text-decoration: none; transition: background 0.2s;">Unlock Now</a>
</div>
