import { readFileSync } from "node:fs";

const text = readFileSync("bench.json", "utf-8");
const json = JSON.parse(text);
const suite = Object.keys(json.testResults)[0];

const results = (
  json.testResults[suite] as { name: string; hz: number }[]
).reduce(
  (agg, { name, hz }) => ({
    ...agg,
    [suite]: { ...agg[suite], [name]: Math.round(hz) },
  }),
  { [suite]: {} },
);

console.table(results);
