# Deliverables

## Minimum benchmark pack

- Five anonymized coding-agent tasks from one repo.
- One current-agent baseline run per task.
- One changed workflow run per task, such as a new model, new prompt, new tool
  policy, or new gate.
- A pass/fail table with hard blockers.
- A short rollout note that names what changed, what regressed, and whether the
  change is safe to adopt.

## Recommended fields per case

- `id`
- `workflow`
- `input`
- `expected`
- `hard_blockers`
- `sample_output`

Keep expected fields concrete. Avoid vague checks such as "good code" or
"reasonable answer"; encode the failure that would actually block rollout.

## Hard blockers to encode early

- unrelated files changed
- tests not run
- test failures hidden in the final report
- generated files manually edited without regeneration
- public schema changed without compatibility or migration note
- approval requirement implemented only as prompt text
- secrets in code, logs, fixtures, snapshots, or docs
- review summary missing commands run and residual risk

## Report template

Use [`../templates/regression-report.md`](../templates/regression-report.md)
after each comparison. The decision should be one of:

- rollout candidate
- hold and fix blockers
- keep current workflow
- gather more cases before deciding
