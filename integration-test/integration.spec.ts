import type { SxProps, Theme } from "@mui/system";
import { mergeSx } from "merge-sx";
import { describe, test, expect } from "bun:test";

describe("Integration", () => {
  test("mergeSx() operates SxProps", () => {
    const sx1: SxProps<Theme> = { mt: 1 };
    const sx2: SxProps<Theme> = (theme) => ({
      mb: theme.spacing(1),
    });
    const sx3: SxProps<Theme> = [{ ml: 1 }, { mr: 1 }];
    const isMobile = false;
    const props: { sx?: SxProps<Theme> } = {};

    expect(mergeSx(sx1, sx2, sx3)).toEqual([sx1, sx2, sx3[0], sx3[1]]);
    expect(mergeSx(sx1, props?.sx, isMobile && sx3)).toEqual([sx1]);
  });
});
