import { SxProps, Theme } from "@mui/system";
import { mergeSx } from "../src";
import { bench, describe } from "vitest";

describe("Performance", () => {
  for (const count of [10, 100, 1000, 10000]) {
    const styles = new Array<SxProps<Theme>>(count).fill({ mt: 1 });

    bench(`${count}`, () => {
      mergeSx(...styles);
    });
  }
});
