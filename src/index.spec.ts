import type { SxProps, Theme } from "@mui/material";
import { mergeSx } from "./index";

describe("mergeSx()", () => {
  it("combines two SxProps", () => {
    expect(mergeSx({ mt: 1 }, { mb: 1 })).toEqual([{ mt: 1 }, { mb: 1 }]);
  });

  it("combines three SxProps", () => {
    expect(mergeSx({ mt: 1 }, { mb: 1 }, { ml: 1 })).toEqual([
      { mt: 1 },
      { mb: 1 },
      { ml: 1 },
    ]);
  });

  it("combines different kinds of SxProps", () => {
    const sx1: SxProps = { mt: 1 };
    const sx2: SxProps<Theme> = (theme) => ({ mb: theme.spacing(1) });
    expect(mergeSx(sx1, sx2)).toEqual([sx1, sx2]);
  });

  it("handles a single SxProps", () => {
    expect(mergeSx({ mt: 1 })).toEqual([{ mt: 1 }]);
  });

  it("handles zero arguments", () => {
    expect(mergeSx()).toEqual([]);
  });

  it("handles null", () => {
    expect(mergeSx({ mt: 1 }, null, { mb: 1 })).toEqual([{ mt: 1 }, { mb: 1 }]);
  });

  it("handles false", () => {
    expect(mergeSx({ mt: 1 }, false, { mb: 1 })).toEqual([
      { mt: 1 },
      { mb: 1 },
    ]);
  });

  it("handles undefined", () => {
    expect(mergeSx({ mt: 1 }, undefined, { mb: 1 })).toEqual([
      { mt: 1 },
      { mb: 1 },
    ]);
  });
});
