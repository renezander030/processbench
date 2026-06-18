import { readFileSync } from "node:fs";

const file = process.argv[2];

if (!file) {
  console.error("Usage: node scripts/check-demo.mjs <jsonl-file>");
  process.exit(1);
}

const rows = readFileSync(file, "utf8")
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean)
  .map((line) => JSON.parse(line));

const results = rows.map((row) => {
  const expected = row.expected;
  const actual = row.sample_output;
  const failures = [];

  for (const [field, value] of Object.entries(expected)) {
    if (Array.isArray(value)) {
      const actualItems = new Set(actual[field] ?? []);
      const missing = value.filter((item) => !actualItems.has(item));
      if (missing.length > 0) failures.push(`${field} missing ${missing.join(", ")}`);
      continue;
    }

    if (actual[field] !== value) failures.push(`${field} expected ${value}, got ${actual[field]}`);
  }

  for (const blocker of row.hard_blockers) {
    if (actual.blockers?.includes(blocker)) failures.push(`hard blocker: ${blocker}`);
  }

  return {
    id: row.id,
    workflow: row.workflow,
    status: failures.length === 0 ? "PASS" : "FAIL",
    failures
  };
});

const passed = results.filter((result) => result.status === "PASS").length;
const failed = results.length - passed;

console.log("ProcessBench offline demo");
console.log("=========================");
console.log(`Cases: ${results.length}`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);
console.log("");

for (const result of results) {
  console.log(`${result.status} ${result.id} ${result.workflow}`);
  for (const failure of result.failures) console.log(`  - ${failure}`);
}

console.log("");
console.log(failed === 0 ? "Decision: rollout candidate" : "Decision: hold and fix blockers");

if (failed > 0) process.exitCode = 1;
