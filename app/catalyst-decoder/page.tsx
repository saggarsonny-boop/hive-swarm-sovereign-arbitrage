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



<!-- Stripe Checkout Block -->
<div id="stripe-checkout-cta" style="margin: 2rem auto; padding: 2rem; border-radius: 12px; background: rgba(59,130,246,0.05); border: 1px solid rgba(59,130,246,0.2); text-align: center; font-family: sans-serif; max-width: 600px;">
    <h3 style="margin-top: 0; color: #fff;">Activate Premium License</h3>
    <p style="color: #9ca3af; font-size: 0.95rem; margin-bottom: 1.5rem;">Get instant access to all advanced capabilities and integration features.</p>
    <a href="https://buy.stripe.com/6oU00lb2L6F37bIazv0RG0J" target="_blank" style="display: inline-block; padding: 0.8rem 2rem; background: #3b82f6; color: #fff; font-weight: bold; border-radius: 8px; text-decoration: none; transition: background 0.2s;">Unlock Now</a>
</div>
