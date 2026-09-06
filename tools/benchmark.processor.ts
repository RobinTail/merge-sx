import { readFile } from "node:fs/promises";

const json = JSON.parse(await readFile("bench.json", "utf8"));
const data = json.testResults[0].assertionResults[0];
const suite = data.fullName;

const results = (
  data.benchmarks as {
    tasks: [{ name: string; throughput: { mean: number } }];
  }[]
).reduce(
  (
    agg,
    {
      tasks: [
        {
          name,
          throughput: { mean },
        },
      ],
    },
  ) => ({
    ...agg,
    [suite]: { ...agg[suite], [name]: Math.round(mean) },
  }),
  { [suite]: {} },
);

console.table(results);
