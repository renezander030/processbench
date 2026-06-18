# Deliverables

## Product-Content Benchmark

Tests whether AI creates accurate, brand-consistent product descriptions without unsupported claims.

Pack contents:

- 50 product examples
- required attribute list
- must-not-claim rules
- brand tone rubric
- model/prompt comparison report

Hard blockers:

- unsupported product claim
- wrong technical attribute
- prohibited claim
- missing required attribute

## Search / Relevance Benchmark

Tests whether AI improves product matching for customer queries.

Pack contents:

- query set
- expected product matches
- relevance rubric
- failure taxonomy
- comparison against current search or merchandising rules

Hard blockers:

- irrelevant high-confidence match
- unsafe or inappropriate recommendation
- missing exact-match product
- hallucinated product feature

## Returns / Support Benchmark

Tests whether AI classifies return reasons, customer sentiment, refund risk, and next action correctly.

Pack contents:

- anonymized return/support cases
- expected classifications
- escalation rules
- tone and next-action rubric
- regression report

Hard blockers:

- wrong refund policy
- missed fraud/escalation signal
- invented customer history
- hostile or off-brand tone

## Campaign-Copy Benchmark

Tests whether AI creates usable variants without brand, legal, or product-claim drift.

Pack contents:

- campaign brief set
- approved claims
- prohibited claims
- tone examples
- channel-specific rubric

Hard blockers:

- unsupported product benefit
- prohibited discount or availability claim
- wrong audience segment
- brand-tone violation
