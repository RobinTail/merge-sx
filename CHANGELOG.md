# Changelog

## Version 1

### v1.2.0

- Just a technical update, no new features or fixes.
- Tested on MUI versions from `5.1.0` to `5.12.0`. 

### v1.1.0

- Just a technical update, no new features or fixes.
- Tested on MUI versions from `5.1.0` to `5.11.0`. 

### v1.0.0

- First stable release according to [SemVer](https://semver.org/).
- No breaking changes.
- Tested on MUI versions from `5.1.0` to `5.10.13`.

## Version 0

### v0.1.5

- Fixing the installation warning introduced in v0.1.1.
- The required peer dependency changed back from `@mui/system@^5.1.0` to `@mui/material@^5.1.0`.

```text
warning " > merge-sx@0.1.4" has unmet peer dependency "@mui/system@^5.1.0".
```

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
