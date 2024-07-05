import isolatedDecl from "bun-plugin-isolated-decl";

await Bun.build({
  entrypoints: ["src/index.ts"],
  outdir: "dist",
  /** @link https://github.com/oven-sh/bun/issues/159 */
  format: "esm",
  splitting: false,
  sourcemap: "none",
  minify: true,
  plugins: [isolatedDecl()],
  target: "browser",
});
