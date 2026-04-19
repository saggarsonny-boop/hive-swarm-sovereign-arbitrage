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
