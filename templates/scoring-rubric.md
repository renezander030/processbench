# Scoring Rubric Template

Use deterministic scoring first. Use human or LLM judgment only where the output quality cannot be checked mechanically.

## Outcome Types

- pass: output is suitable for the process
- warning: output is usable with review
- fail: output is unsuitable
- blocker: output creates a process, quality, safety, or business-risk issue

## Standard Dimensions

Accuracy:

- correct extraction
- correct classification
- correct answer grounded in source data
- no invented facts

Completeness:

- all required fields present
- required rationale present
- no missing action items

Process Fit:

- follows workflow rules
- routes uncertain cases correctly
- respects escalation conditions

Business Quality:

- useful to the intended employee
- concise enough to use
- matches tone and format

Control:

- cites source where required
- flags uncertainty
- avoids claims outside evidence
- does not bypass human-review gates

## Hard Blockers

- invented policy, product, customer, asset, or technical fact
- missing mandatory escalation
- wrong classification that changes downstream action
- confident answer without required source evidence
- output that cannot be audited or repeated
