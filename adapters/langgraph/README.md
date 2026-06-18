# LangGraph Adapter

Use LangGraph when the benchmarked workflow is stateful or agentic.

Best fit:

- support workflows with triage, lookup, action, and escalation
- maintenance troubleshooting with tool calls
- telecom agent workflows
- customer-success workflows with several decision points
- human-in-the-loop review

Use LangGraph as an implementation or tracing target, not as the headline.

The workflow owner cares about:

- did the process improve?
- did the agent preserve control?
- did the model change regress key cases?
- where does human review stay?

LangGraph helps model the workflow. ProcessBench defines what to test and how to report it.
