# B2B Software, Telecom, And Professional Services

## Typical Reader

- AI engineer
- platform engineer
- solutions architect
- product engineer
- data or analytics lead
- technical program owner

## Useful When

AI is already part of a software, telecom, delivery, or knowledge workflow, and the team needs a repeatable way to compare a model, prompt, setting, or vendor against that workflow.

## Workflow Targets

- ticket classification and routing
- response generation
- customer-success account summaries
- RFP and proposal answer generation
- implementation-note drafting
- software-delivery QA checklists
- telecom fault triage and troubleshooting
- internal knowledge-base Q&A

## Recommended Framework Stack

Default:

- promptfoo for model/prompt/provider comparison

Add when needed:

- DeepEval for pytest-style app evals
- Ragas for RAG and knowledge-base workflows
- LangGraph/LangSmith for multi-step support or delivery agents

## Related Repositories

- [`processbench`](https://github.com/renezander030/processbench) for the benchmark-pack structure.
- [`draftcat`](https://github.com/renezander030/draftcat) for governed AI pipelines with approval and audit.
- [`agent-approval-gate`](https://github.com/renezander030/agent-approval-gate) for a minimal approval-gate pattern around high-risk actions.
- [`agentic-task-system`](https://github.com/renezander030/agentic-task-system) for keeping workflow cases, decisions, and follow-ups connected to task context.
