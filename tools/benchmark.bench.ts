import { SxProps, Theme } from "@mui/system";
import { mergeSx } from "../src";
import { bench } from "vitest";

[10, 100, 1000, 10000].map((count) => {
  const styles = new Array<SxProps<Theme>>(count).fill({ mt: 1 });

  bench(`${count}`, () => {
    mergeSx(...styles);
  });
});
