const json = await Bun.file("bench.json", { type: "application/json" }).json();
const data = json.files[0].groups[0];
const suite = data.fullName.split(">")[1].trim();

const results = (data.benchmarks as { name: string; hz: number }[]).reduce(
  (agg, { name, hz }) => ({
    ...agg,
    [suite]: { ...agg[suite], [name]: Math.round(hz) },
  }),
  { [suite]: {} },
);

console.table(results);
