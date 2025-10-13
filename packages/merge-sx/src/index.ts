import type { SxProps } from "@mui/material";

type PureSx<T extends object> = Exclude<SxProps<T>, ReadonlyArray<unknown>>;
type SxAsArray<T extends object> = Array<PureSx<T>>;

/**
 * @desc Combines multiple SxProps
 * @author Anna Bocharova
 * @link https://stackoverflow.com/a/71533846
 * @link https://mui.com/system/getting-started/the-sx-prop/#array-values
 * @link https://mui.com/system/getting-started/the-sx-prop/#passing-the-sx-prop
 * @requires SxProps from MUI 5.1.0 or higher
 * @see https://github.com/mui/material-ui/releases/tag/v5.1.0
 * @link https://github.com/mui/material-ui/pull/29297
 * @since v0.1.4 using for..of instead of reducer for performance reasons
 */
export const mergeSx = <T extends object>(
  ...styles: (SxProps<T> | false | undefined)[]
): SxProps<T> => {
  const capacitor: SxAsArray<T> = [];
  for (const sx of styles) {
    if (sx) {
      if (Array.isArray(sx)) {
        for (const sub of sx as SxAsArray<T>) {
          capacitor.push(sub);
        }
      } else {
        capacitor.push(sx as PureSx<T>);
      }
    }
  }
  return capacitor;
};
