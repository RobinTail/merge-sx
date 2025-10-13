import { describe, expect, it } from "bun:test";
import type { SxProps, Theme } from "@mui/material";
import { expectTypeOf } from "expect-type";
import { mergeSx } from "./index";

describe("mergeSx()", () => {
  describe("types", () => {
    expectTypeOf(mergeSx).toBeCallableWith({ mt: 1 });
    expectTypeOf(mergeSx).toBeCallableWith({ mt: 1 }, { mb: 1 });
    expectTypeOf(mergeSx).toBeCallableWith(false, undefined, null);
    expectTypeOf(mergeSx).returns.toExtend<SxProps>();
    expectTypeOf(mergeSx<Theme>({ mt: 1 })).toEqualTypeOf<SxProps<Theme>>();
    expectTypeOf(
      mergeSx((theme: Theme) => ({ mt: theme.spacing(1) })),
    ).toEqualTypeOf<SxProps<Theme>>();
  });

  describe("simple cases", () => {
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
  });

  describe("variations of SxProps", () => {
    it("handles functions", () => {
      const sx1: SxProps = { mt: 1 };
      const sx2: SxProps<Theme> = (theme) => ({ mb: theme.spacing(1) });
      expect(mergeSx(sx1, sx2)).toEqual([sx1, sx2]);
    });

    it("handles arrays of SxProps", () => {
      expect(mergeSx({ mt: 1 }, [{ mb: 1 }, { ml: 1 }])).toEqual([
        { mt: 1 },
        { mb: 1 },
        { ml: 1 },
      ]);
    });

    it("handles null", () => {
      expect(mergeSx({ mt: 1 }, null, { mb: 1 })).toEqual([
        { mt: 1 },
        { mb: 1 },
      ]);
    });

    it("handles false in array", () => {
      expect(mergeSx({ mt: 1 }, [false, { ml: 1 }])).toEqual([
        { mt: 1 },
        false,
        { ml: 1 },
      ]);
    });

    it("handles null in array", () => {
      expect(mergeSx({ mt: 1 }, [null, { ml: 1 }])).toEqual([
        { mt: 1 },
        null,
        { ml: 1 },
      ]);
    });
  });

  describe("edge cases", () => {
    it("handles a single SxProps", () => {
      expect(mergeSx({ mt: 1 })).toEqual([{ mt: 1 }]);
    });

    it("handles zero arguments", () => {
      expect(mergeSx()).toEqual([]);
    });

    it("handles single null", () => {
      expect(mergeSx(null)).toEqual([]);
    });

    it("handles single false", () => {
      expect(mergeSx(false)).toEqual([]);
    });

    it("handles single undefined", () => {
      expect(mergeSx(undefined)).toEqual([]);
    });

    it("handles single empty array", () => {
      expect(mergeSx([])).toEqual([]);
    });

    it("handles 65535 arguments", () => {
      const styles = Array<SxProps>(65535).fill({ mt: 1 });
      const result = mergeSx(...styles);
      expect(Array.isArray(result)).toBeTruthy();
      expect((result as any[]).length).toBe(65535);
    });
  });

  describe("conditional type cases", () => {
    it("removes false from the top level", () => {
      expect(mergeSx({ mt: 1 }, false, { mb: 1 })).toEqual([
        { mt: 1 },
        { mb: 1 },
      ]);
    });

    it("removes undefined", () => {
      expect(mergeSx({ mt: 1 }, undefined, { mb: 1 })).toEqual([
        { mt: 1 },
        { mb: 1 },
      ]);
    });
  });
});
