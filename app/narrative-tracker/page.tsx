import ArbEngineShell from '@/components/ArbEngineShell'

const ENGINE = {
  slug: 'narrative-tracker',
  name: 'Narrative Tracker',
  icon: '📡',
  tagline: 'Track the story the market is telling itself',
  placeholder: 'Describe a market, sector, or asset — what story is being told about it?',
  demoInput: 'Everyone is talking about AI capex and Nvidia. Is the narrative peaking?',
  demoOutput: `Narrative: AI infrastructure supercycle.

Current strength: 9/10. Maximum penetration — retail, institutional, media, policy. When taxi drivers know the capex numbers, you're at the top of narrative diffusion.

Fragility markers:
· Hyperscaler capex guidance is the single thread holding this together
· Any miss or guidance cut = immediate narrative fracture (AWS/Azure/GCP Q earnings are the events)
· TSMC utilisation is the physical reality check — currently supports the narrative
· Power/cooling constraints are becoming the new narrative (limits, not supercycle)

Narrative rotation signal: Watch semiconductor equipment names (ASML, AMAT). They lead Nvidia by 1-2 months on capex cycle turns. ASML guidance is the canary.

Non-consensus position: The AI narrative is intact but the expression is rotating. The edge is no longer in Nvidia (crowded, expensive). It's in the picks-and-shovels that the narrative hasn't yet blessed: power grid, cooling, optical networking.

Timing of rotation: 6-18 months. Narratives don't die — they migrate. The next host is physical AI infrastructure: power, transformers, data centre REITs.

Trade: Long grid/power beneficiaries, short the crowded darlings on earnings misses. The narrative pays, but you need to be in the right seat.`,
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
