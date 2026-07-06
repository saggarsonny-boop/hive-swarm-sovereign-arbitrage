import ArbEngineShell from '@/components/ArbEngineShell'

const ENGINE = {
  slug: 'dislocation-finder',
  name: 'Dislocation Finder',
  icon: '⚡',
  tagline: 'Find where price has broken from value',
  placeholder: 'Describe an asset, pair, or spread you think may be dislocated…',
  demoInput: 'European natural gas vs US LNG spread looks historically wide. Is this a real dislocation or a new structural reality?',
  demoOutput: `Dislocation type: Structural repricing with a temporary dislocation component.

The spread: TTF vs Henry Hub LNG-equivalent has averaged ~2-3x pre-2022, now running 4-6x.

Structural component (NOT reverting soon):
· European energy security premium is now permanent policy, not cyclical
· Regasification infrastructure buildout takes 3-5 years to compress the spread
· EU carbon pricing creates a permanent wedge

Dislocation component (DOES revert):
· Winter storage overbuild in mild weather = temporary TTF suppression
· LNG spot cargo arbitrage window is open and closing: ~$2-3/MMBtu upside on the spread compression trade in 6-12 month horizon

How to measure reversion: Watch TTF/JKM spread (Asian demand proxy) — when JKM drops below TTF, the arb closes.

Edge type: Structural + seasonal. Better expressed via LNG shipping equities or European utility pairs than outright gas futures (roll costs punishing).

Risk it's not a dislocation: If China demand stays suppressed into 2025, the structural floor moves lower. Size accordingly.`,
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
