import type { SxProps } from "@mui/material";

/**
 * @desc Combines multiple SxProps
 * @author Anna Bocharova
 * @link https://stackoverflow.com/a/71533846
 * @link https://mui.com/system/getting-started/the-sx-prop/#array-values
 * @link https://mui.com/system/getting-started/the-sx-prop/#passing-the-sx-prop
 * @requires SxProps from MUI 5.1.0 or higher
 * @see https://github.com/mui/material-ui/releases/tag/v5.1.0
 * @link https://github.com/mui/material-ui/pull/29297
 */
export const mergeSx = <T extends object>(
  ...styles: (SxProps<T> | false | undefined)[]
): SxProps<T> => {
  const ensureArray = (sx: SxProps<T>) => (Array.isArray(sx) ? sx : [sx]);
  return styles.reduce<SxProps<T>>(
    (agg, sx) => [...ensureArray(agg), ...ensureArray(sx || [])],
    []
  );
};

export const sxMerge = mergeSx;
export default mergeSx;
