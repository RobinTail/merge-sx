import type { SxProps, Theme } from "@mui/system";
import { bench, describe } from "vitest";
import { mergeSx } from "../packages/merge-sx/src/index.ts";

describe("Performance", () => {
  for (const count of [10, 100, 1000, 10000]) {
    const styles = Array.from({ length: count }, (): SxProps<Theme> => ({
      mt: 1,
    }));

    bench(`${count}`, () => {
      mergeSx(...styles);
    });
  }
});
