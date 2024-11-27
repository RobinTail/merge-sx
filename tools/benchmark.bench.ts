import type { SxProps, Theme } from "@mui/system";
import { bench, describe } from "vitest";
import { mergeSx } from "../packages/merge-sx/src";

describe("Performance", () => {
  for (const count of [10, 100, 1000, 10000]) {
    const styles = new Array<SxProps<Theme>>(count).fill({ mt: 1 });

    bench(`${count}`, () => {
      mergeSx(...styles);
    });
  }
});
