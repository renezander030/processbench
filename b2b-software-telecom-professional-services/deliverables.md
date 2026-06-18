# Deliverables

## Support-Ticket Benchmark

Tests whether AI can classify, route, summarize, and draft answers for support tickets.

Pack contents:

- 50 anonymized support tickets
- expected classification and priority
- escalation rules
- response-quality rubric
- regression report across model/prompt/settings
- recommendation for automation vs human review

Hard blockers:

- missed escalation
- invented product behavior
- wrong severity
- answer not grounded in known support material

## RFP / Proposal Benchmark

Tests whether AI creates accurate, reusable, review-ready proposal answers.

Pack contents:

- 20 representative RFP questions
- approved answer components
- must-include and must-not-claim lists
- tone and formatting rubric
- model/prompt comparison table

Hard blockers:

- invented capability
- unsupported compliance claim
- wrong integration promise
- missing required caveat

## Customer-Success Benchmark

Tests whether AI produces useful account summaries and risk flags.

Pack contents:

- anonymized account notes
- expected risk categories
- next-action rubric
- source-grounding checks
- human-review routing rules

Hard blockers:

- missed churn risk
- invented customer history
- unsupported upsell recommendation
- wrong owner/action

## Telecom Fault-Triage Benchmark

Tests whether AI handles telecom troubleshooting beyond surface-level intent recognition.

Pack contents:

- representative incidents
- expected intent/entity extraction
- ordered troubleshooting steps
- tool-invocation expectations
- root-cause and solution-generation rubric

Hard blockers:

- skipped mandatory diagnostic step
- wrong equipment-specific assumption
- procedural answer without evidence
- failed escalation on outage-impact cases
