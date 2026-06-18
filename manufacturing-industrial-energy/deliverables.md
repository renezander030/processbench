# Deliverables

## Maintenance Work-Order Benchmark

Tests whether AI extracts asset, fault, priority, parts, next action, and escalation conditions from maintenance logs.

Pack contents:

- 30 to 100 anonymized work orders
- expected fields
- priority and escalation rubric
- parts/action extraction checks
- model/settings comparison report

Hard blockers:

- wrong safety-critical priority
- invented root cause
- missing required part or asset
- skipped expert review on ambiguous failure

## SOP / Work-Instruction Benchmark

Tests whether AI answers from internal procedures without inventing steps.

Pack contents:

- selected SOP excerpts
- representative worker questions
- source-grounding requirements
- must-not-answer rules
- escalation and uncertainty rules

Hard blockers:

- invented procedure step
- missing safety condition
- answer without source reference
- unsafe simplification

## Quality-Incident Benchmark

Tests whether AI summarizes defects, containment actions, suspected causes, and follow-up owners.

Pack contents:

- anonymized incident examples
- expected summary fields
- containment-action rubric
- owner/action extraction
- regression report

Hard blockers:

- missed containment requirement
- invented root cause
- wrong affected product/process
- missing follow-up owner

## Engineering-Change Benchmark

Tests whether AI compares old and new specs and identifies affected documents, processes, or teams.

Pack contents:

- change examples
- expected affected assets
- impact categories
- review routing rules
- evidence matrix

Hard blockers:

- missed downstream process
- unsupported impact claim
- wrong document reference
- no human review for high-impact change
