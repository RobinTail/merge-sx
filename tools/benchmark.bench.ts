import type { SxProps, Theme } from "@mui/system";
import { test } from "vitest";
import { mergeSx } from "../packages/merge-sx/src/index.ts";

test("Performance", async ({ bench }) => {
  for (const count of [10, 100, 1000, 10000]) {
    const styles = Array.from({ length: count }, (): SxProps<Theme> => ({
      mt: 1,
    }));

    await bench(`${count}`, () => {
      mergeSx(...styles);
    }).run();
  }
});
