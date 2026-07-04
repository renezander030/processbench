# Dolt-versioned eval fixtures

ProcessBench packs start as JSONL because that is easy to copy, review, and run
with existing eval tools. Dolt is useful once the pack becomes a regression
surface: every case edit becomes a data diff, and every benchmark run can record
which dataset commit it used.

## Export a pack

```bash
npm run dolt:export -- agent-coding-workflows/cases.jsonl --pack agent-coding --out dolt/eval_cases.csv
```

Import into a Dolt database:

```bash
dolt sql < dolt/schema.sql
dolt table import -u eval_cases dolt/eval_cases.csv
dolt add .
dolt commit -m "Import agent-coding eval cases"
```

After changing cases, export and import again, then inspect the data diff:

```bash
npm run dolt:export -- agent-coding-workflows/cases.jsonl --pack agent-coding --out dolt/eval_cases.csv
dolt table import -u eval_cases dolt/eval_cases.csv
dolt diff eval_cases
```

The schema keeps fixtures and run results separate:

- `eval_cases` — versioned benchmark inputs and expected outcomes
- `benchmark_runs` — model/prompt/run metadata, including `dataset_commit`
- `case_results` — pass/fail output for each case in a run

The benchmark runner can stay promptfoo, DeepEval, Ragas, or a custom harness.
Dolt owns the dataset lineage so a regression can be tied to a fixture change
instead of guessed from a report.
