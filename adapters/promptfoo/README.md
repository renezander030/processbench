# promptfoo Adapter

ProcessBench uses promptfoo as the default execution layer.

Why:

- YAML configs are easy to inspect and reuse.
- It compares prompts, models, and providers.
- It supports automated assertions.
- It can run locally.
- It can be added to CI/CD.
- It already has red-team and vulnerability-testing paths.

ProcessBench benchmark packs provide:

- one promptfoo config per business workflow
- fixtures that map cleanly to `tests`
- hard blockers encoded as assertions where possible
- report templates that translate promptfoo results into business recommendations

Example workflow mapping:

| ProcessBench artifact | promptfoo artifact |
|---|---|
| workflow fixture | test case |
| model/vendor option | provider |
| prompt variant | prompt |
| hard blocker | assertion |
| regression report | eval output plus business summary |

Do not force every use case into promptfoo if another tool fits better. Use promptfoo as the first runnable default.
