import { SxProps, Theme } from "@mui/system";
import { Suite } from "benchmark";
import mergeSx from "../src";

[10, 100, 1000, 10000].forEach((count) => {
  const suite = new Suite(`Performance ${count}`);

  const styles = new Array<SxProps<Theme>>(count).fill({ mt: 1 });

  const ensureArray = (sx: SxProps<any>) => (Array.isArray(sx) ? sx : [sx]);
  const altMerge: typeof mergeSx = <T extends object>(
    ...arg: (SxProps<T> | false | undefined)[]
  ) =>
    arg.reduce<SxProps<T>>(
      (agg, sx) => ensureArray(agg).concat(ensureArray(sx || [])),
      []
    );

  suite
    .add("Current implementation", () => {
      mergeSx(...styles);
    })
    .add("Alternative implementation", () => {
      altMerge(...styles);
    })
    .on("cycle", (event: Event) => {
      console.log(suite.name, String(event.target));
    })
    .on("complete", () => {
      console.log(
        "Fastest in ",
        suite.name,
        "is",
        suite.filter("fastest").map("name")
      );
    })
    .run({ async: true });
});
