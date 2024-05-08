import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    benchmark: {
      outputJson: "bench.json",
    },
  },
});
