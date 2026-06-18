# Regression Report Template

## Executive Summary

Workflow: B2B support-ticket routing

Decision: Roll out the revised prompt, keep the current baseline available for rollback, and do not use the cheaper model for this workflow yet.

Recommendation: The revised prompt improved the pass rate without introducing hard blockers. The cheaper model reduced cost but missed escalation on security and billing cases.

## Compared Options

| Option | Cost | Latency | Pass Rate | Hard Blockers | Recommendation |
|---|---:|---:|---:|---:|---|
| Current baseline | 1.00x | 1.00x | 92% | 0 | Keep as rollback |
| Cheaper model | 0.28x | 0.74x | 74% | 3 | Hold |
| Revised prompt | 1.04x | 1.03x | 96% | 0 | Roll out |

## What Improved

- The revised prompt preserved escalation on authentication, billing, security, and compliance cases.
- Required fields were present more consistently.
- The model stopped inventing root causes for unresolved incidents.

## What Regressed

- The cheaper model missed escalation on security and billing cases.
- The cheaper model gave confident answers when source evidence was missing.

## Hard Blockers

- Missed escalation on audit-log incident.
- Missed escalation on duplicate-invoice incident.
- Unsupported compliance claim in prospect response.

## Human Review Required

- Compliance answers that involve SOC 2, data residency, DPA terms, or security commitments.
- Billing incidents that can affect accounting close or customer invoices.
- Security and access-control incidents.

## Rollout Recommendation

Choose one:

- rollout
- hold
- split-route by case type
- run larger benchmark
- keep current baseline

## Decision Notes

- Roll out only if production monitoring tracks the same hard blockers.
- Add 10 more anonymized support cases before changing both model and prompt together.
- Keep a rollback option for the current baseline.
