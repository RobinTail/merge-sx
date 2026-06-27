import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/index.ts"],
  outDir: "dist",
  format: "esm",
  clean: true,
  platform: "browser",
  dts: true,
  minify: true,
  fixedExtension: false,
  deps: {
    neverBundle: ["csstype", "@mui/system"],
  },
  attw: { level: "error", profile: "esm-only" },
});
