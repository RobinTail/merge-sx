import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/index.ts"],
  outDir: "dist",
  format: ["esm", "cjs"],
  clean: true,
  platform: "browser",
  dts: true,
  minify: true,
});
