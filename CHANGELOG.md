# Changelog

## Version 0

### v0.1.4

- Another performance improvement. This time by `878%` for 10 arguments.
- I switched from using reducer to `for..of` syntax.

```text
┌─────────────┬─────────┬────────┬───────┬───────┐
│ N arguments │   10    │  100   │ 1000  │ 10000 │
├─────────────┼─────────┼────────┼───────┼───────┤
│ ops/s       │ 6475799 │ 718229 │ 74589 │ 7636  │
└─────────────┴─────────┴────────┴───────┴───────┘
```

### v0.1.3

- The performance has been improved by `24%` for 10 arguments.

```text
┌─────────────┬────────┬───────┬──────┬───────┐
│ N arguments │   10   │  100  │ 1000 │ 10000 │
├─────────────┼────────┼───────┼──────┼───────┤
│ ops/s       │ 601463 │ 48255 │ 2068 │  25   │
└─────────────┴────────┴───────┴──────┴───────┘
```

### v0.1.2

- No changes to the code. Descriptive works only.

### v0.1.1

- The required peer dependency changed from `@mui/material@^5.1.0` to `@mui/system@^5.1.0`.

### v0.1.0

- The first release of the utility.
