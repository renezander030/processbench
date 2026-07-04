import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const file = args[0];

function argValue(flag, fallback) {
  const idx = args.indexOf(flag);
  return idx >= 0 && args[idx + 1] ? args[idx + 1] : fallback;
}

if (!file) {
  console.error("Usage: node scripts/dolt-export.mjs <jsonl-file> [--pack name] [--out dolt/eval_cases.csv]");
  process.exit(1);
}

const pack = argValue("--pack", path.basename(path.dirname(file)) === "examples" ? path.basename(file, ".jsonl") : path.basename(path.dirname(file)));
const out = argValue("--out", "");

function csv(value) {
  const text = value == null ? "" : String(value);
  return `"${text.replaceAll('"', '""')}"`;
}

const rows = readFileSync(file, "utf8")
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean)
  .map((line, index) => {
    const row = JSON.parse(line);
    if (!row.id) throw new Error(`${file}:${index + 1} missing id`);
    if (!row.workflow) throw new Error(`${file}:${index + 1} missing workflow`);
    return row;
  });

const header = ["pack", "case_id", "workflow", "input", "expected_json", "hard_blockers_json", "source_path"];
const lines = [
  header.map(csv).join(","),
  ...rows.map((row) => [
    pack,
    row.id,
    row.workflow,
    row.input,
    JSON.stringify(row.expected ?? {}),
    JSON.stringify(row.hard_blockers ?? []),
    file,
  ].map(csv).join(",")),
];

const body = lines.join("\n") + "\n";
if (out) {
  mkdirSync(path.dirname(out), { recursive: true });
  writeFileSync(out, body);
  console.log(`wrote ${out} (${rows.length} cases, pack=${pack})`);
} else {
  process.stdout.write(body);
}
