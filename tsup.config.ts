import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs", "iife"],
  splitting: false,
  sourcemap: false,
  minify: true,
  clean: true,
  dts: true,
});
