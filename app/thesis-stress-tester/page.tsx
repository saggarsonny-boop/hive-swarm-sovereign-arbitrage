import ArbEngineShell from '@/components/ArbEngineShell'

const ENGINE = {
  slug: 'thesis-stress-tester',
  name: 'Thesis Stress Tester',
  icon: '🧪',
  tagline: 'Find the holes before the market does',
  placeholder: 'State your investment thesis clearly — I will attack it…',
  demoInput: 'I am long copper miners because the energy transition requires massive copper demand and supply is constrained for the next decade.',
  demoOutput: `Thesis: Long copper miners — energy transition demand + supply constraint.

The thesis is real. The trade is crowded. Here are the holes:

ADVERSARIAL SCENARIO 1: Demand disappointment (kills the thesis)
EV adoption slows to 30% of projections (it's already tracking behind). Grid buildout faces permitting and political delays (US IRA is being defunded/litigated). The "energy transition" copper supercycle is a 15-year thesis being priced in a 3-year market. Price already embeds much of the demand story.

ADVERSARIAL SCENARIO 2: China demand collapse
Copper is still 50%+ China demand. A Chinese property sector L-shaped recovery (not V-shaped) keeps the lid on copper prices regardless of Western green demand. This is the base case many bulls are dismissing.

ADVERSARIAL SCENARIO 3: Substitution and recycling acceleration
Copper substitution (aluminium in wiring, new battery chemistries) is moving faster than miners are modelling. Recycled copper is ~35% of supply and growing. The "supply constrained" thesis assumes no substitution response.

SECOND-ORDER EFFECTS YOU HAVEN'T MODELLED:
· Miner operating costs have risen 40% since 2020 — margins are lower than the copper price suggests
· Chilean/Peruvian political risk is not fully priced (both have enacted windfall taxes)
· The "junior miner" tail in your portfolio carries exploration risk that doesn't correlate with copper price

HISTORICAL ANALOGUES WHERE THIS THESIS FAILED:
1. 2010-2013: China commodity supercycle thesis → copper miners flat/negative despite rising copper
2. 2007: Oil company thesis at peak demand projections → stocks peaked 12 months before oil

SINGLE MOST IMPORTANT VARIABLE: Chinese construction floor/infrastructure spend. Not EV demand. Not Western grid. China.

Recommendation: Trim single-name miner exposure. Express via copper price directly (futures or ETF) if you believe the thesis. Miners have more risk, not more upside.`,
}

export default function Page() {
  return <ArbEngineShell engine={ENGINE} />
}
