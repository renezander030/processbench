# Agent Coding Workflows

Use this pack when the workflow under test is not a chatbot answer, but an AI
coding agent changing a repository.

The useful question is:

> Does this agent workflow still produce safe repo changes when the codebase,
> instructions, or finish-line checks change?

This pack is inspired by graph-first and checked-patch systems such as
Zerolang, but it does not require adopting a new language. It tests the
operating pattern: inspect current state, make a scoped change, run deterministic
checks, and report proof.

## Workflow modes

Compare two modes on the same task:

- `text-edit`: the agent edits files directly and self-reports completion.
- `checked-patch`: the agent must inspect state, make a scoped patch, run gates,
  and produce review evidence.

## First benchmark shape

Start with five anonymized coding-agent tasks:

1. Add a CLI help flag without changing normal command behavior.
2. Rename one public JSON output field while preserving backward-compatible input.
3. Update generated command docs and prove they are current.
4. Add an outbound action that cannot execute without persisted approval.
5. Add a provider integration without leaking credentials in code, logs, tests, or docs.

Score each run on:

- correctness
- stale-context resistance
- unintended-file changes
- test behavior
- reviewability
- recovery after a failed gate

## Offline demo

The demo uses sample outputs only. It shows the fixture shape before you connect
real providers:

```bash
npm run demo:agent-coding
```

## Promptfoo example

The example config compares a direct text-edit prompt against a checked-patch
prompt:

```bash
npx promptfoo@0.115.0 eval -c agent-coding-workflows/promptfoo.example.yaml
```

Replace the bundled cases with real repository tasks before using the result for
a rollout decision.
