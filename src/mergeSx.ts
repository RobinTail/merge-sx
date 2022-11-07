import { SystemStyleObject } from "@mui/system";
import type { SxProps } from "@mui/system";

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
  const capacitor: Array<
    Readonly<
      boolean | SystemStyleObject<T> | ((theme: T) => SystemStyleObject<T>)
    >
  > = [];
  for (const sx of styles) {
    if (sx) {
      if (Array.isArray(sx)) {
        for (const sub of sx) {
          capacitor.push(sub);
        }
      } else {
        capacitor.push(sx);
      }
    }
  }
  return capacitor;
};
