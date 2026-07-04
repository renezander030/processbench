CREATE TABLE eval_cases (
  pack VARCHAR(128) NOT NULL,
  case_id VARCHAR(128) NOT NULL,
  workflow VARCHAR(128) NOT NULL,
  input LONGTEXT NOT NULL,
  expected_json JSON NOT NULL,
  hard_blockers_json JSON NOT NULL,
  source_path VARCHAR(512) NOT NULL,
  PRIMARY KEY (pack, case_id)
);

CREATE TABLE benchmark_runs (
  run_id VARCHAR(128) NOT NULL,
  pack VARCHAR(128) NOT NULL,
  started_at TIMESTAMP NOT NULL,
  model VARCHAR(128),
  prompt_version VARCHAR(128),
  dataset_commit VARCHAR(64),
  notes LONGTEXT,
  PRIMARY KEY (run_id)
);

CREATE TABLE case_results (
  run_id VARCHAR(128) NOT NULL,
  pack VARCHAR(128) NOT NULL,
  case_id VARCHAR(128) NOT NULL,
  status VARCHAR(16) NOT NULL,
  failures_json JSON NOT NULL,
  PRIMARY KEY (run_id, pack, case_id),
  FOREIGN KEY (run_id) REFERENCES benchmark_runs(run_id),
  FOREIGN KEY (pack, case_id) REFERENCES eval_cases(pack, case_id)
);
