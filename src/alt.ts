import type { SxProps, SystemStyleObject } from "@mui/system";

export const altMerge = <T extends object>(
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
