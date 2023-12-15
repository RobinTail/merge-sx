import { SxProps, Theme } from "@mui/system";
import bench from "benchmark";
import { mergeSx } from "../src";

const results: Record<string, Record<number, number>> = {};

Promise.all(
  [10, 100, 1000, 10000].map(
    (count) =>
      new Promise((resolve) => {
        const suite = new bench.Suite(`Performance`);

        const styles = new Array<SxProps<Theme>>(count).fill({ mt: 1 });

        suite
          .add("Current implementation", () => {
            mergeSx(...styles);
          })
          .on("cycle", ({ target }: bench.Event) => {
            results[target.name!] = {
              ...results[target.name!],
              [count]: Math.round(target.hz!),
            };
          })
          .on("complete", () => {
            resolve(suite.filter("fastest").map("name"));
          })
          .run({ async: true });
      }),
  ),
).then(() => {
  console.table(results);
});
