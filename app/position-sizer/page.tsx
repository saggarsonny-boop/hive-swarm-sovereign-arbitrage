import ArbEngineShell from '@/components/ArbEngineShell'

const ENGINE = {
  slug: 'position-sizer',
  name: 'Position Sizer',
  icon: '⚖️',
  tagline: 'Size for survival and upside, not hope',
  placeholder: 'Describe your trade: edge, conviction level, win rate, R:R, max loss tolerance…',
  demoInput: 'Trade: long gold. Win rate ~60%, average win 15%, average loss 8%. Portfolio is $500K. Max I can lose on this trade is $15K.',
  demoOutput: `Position sizing: Long gold, $500K portfolio.

Inputs:
· Win rate: 60% (p = 0.6)
· Average win: 15% (b = 0.15)
· Average loss: 8% (a = 0.08)
· Max portfolio loss: $15K (3% of portfolio)

Kelly Fraction calculation:
f* = (p × b - (1-p) × a) / (b × a)
f* = (0.6 × 0.15 - 0.4 × 0.08) / (0.15 × 0.08)
f* = (0.09 - 0.032) / 0.012
f* = 0.058 / 0.012
f* = 4.83 — this is a very high Kelly fraction, suggesting genuine edge

IMPORTANT: Full Kelly is theoretically optimal but practically dangerous. Use fractional Kelly.

Recommended positions:

Half Kelly (conservative): 2.4% of portfolio = $12,000
Quarter Kelly (very conservative): 1.2% of portfolio = $6,000

Max loss constraint check:
· At $12,000 position, 8% loss = $960 — well within your $15K limit ✓
· At $15K max loss, position can be as large as $187,500 at 8% stop

Recommended size: $12,000–$25,000 (2.4–5% of portfolio)

Stop-loss placement: The 8% average loss implies a hard stop at -8% from entry. Be disciplined — don't move the stop.

Scaling logic: If this is a new thesis (first position), start at half the recommended size ($6,000–$12,000). Add if price confirms (e.g., on a breakout or pullback to support). Max 1.5x recommended size when adding.

Portfolio context: Gold as a single position should not exceed 10% of a $500K portfolio ($50K) regardless of Kelly output. Correlation to other holdings matters more than Kelly in portfolio context.

Risk of ruin at recommended sizing: <0.1% per trade. Acceptable.`,
}

export default function Page() {
  return <ArbEngineShell engine={ENGINE} />
}
