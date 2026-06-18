# Retail, E-Commerce, And Consumer Goods

## Typical Reader

- e-commerce engineer
- data or analytics lead
- merchandising operations lead
- growth engineer
- product manager
- technical program owner

## Useful When

AI is already used for product content, merchandising, search, campaigns, or customer workflows, and the team needs to catch regressions in product accuracy, brand consistency, policy handling, or query relevance.

## Workflow Targets

- product-description generation
- product attribute validation
- customer-support classification
- returns reason analysis
- campaign copy generation
- merchandising and search query matching
- personalization and segment copy
- marketplace listing QA

## Recommended Framework Stack

Default:

- promptfoo for model/prompt/provider comparison

Add when needed:

- Ragas for product knowledge and policy retrieval
- DeepEval for custom quality metrics
- LangGraph for multi-step customer-service or merchandising agents

## Related Repositories

- [`processbench`](https://github.com/renezander030/processbench) for the benchmark-pack structure.
- [`draftcat`](https://github.com/renezander030/draftcat) for governed AI pipelines with approval and audit.
- [`agent-approval-gate`](https://github.com/renezander030/agent-approval-gate) for review gates around customer-facing or policy-sensitive actions.
- [`skillgate`](https://github.com/renezander030/skillgate) for deterministic gates when AI changes storefront code, content rules, or release artifacts.
