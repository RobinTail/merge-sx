import { SxProps, Theme } from "@mui/system";
import { Suite, Target } from "benchmark";
// eslint-disable-next-line import/extensions
import mergeSx from "../src/index.ts";

const results: Record<string, Record<number, number>> = {};

Promise.all(
  [10, 100, 1000, 10000].map(
    (count) =>
      new Promise((resolve) => {
        const suite = new Suite(`Performance`);

        const styles = new Array<SxProps<Theme>>(count).fill({ mt: 1 });

        suite
          .add("Current implementation", () => {
            mergeSx(...styles);
          })
          .on("cycle", (event: Event) => {
            const target = event.target as unknown as Target;
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
