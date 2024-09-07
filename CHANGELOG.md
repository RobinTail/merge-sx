# Changelog

## Version 3

### v3.2.1

- Technical update:
  - Faster CI with bun lock-file diff control;
  - Reduced dev dependencies;
  - Upgraded dependencies.

### v3.2.0

- Builder changed to `tsdown` thanks to [@ryoppippi](https://github.com/ryoppippi).

### v3.1.0

- Supporting Material UI v6.

### v3.0.1

- Fixed peer dependency: the minimal `@mui/material` version set back to `5.1.0`.

### v3.0.0

- There are no breaking changes (\*), but the distribution build process has changed:
  - ESM is built using [bun](https://bun.sh/);
  - DTS is built using [bun plugin Isolated Declarations](https://github.com/ryoppippi/bun-plugin-isolated-decl)
    that runs [oxc transformer](https://www.npmjs.com/package/oxc-transform) under the hood;
  - CJS is built using [tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
    and minified using [uglify-js](https://www.npmjs.com/package/uglify-js).
- (\*) — a peer dependency increase was found later and fixed in 3.0.1.

## Version 2

### v2.0.3

- Technical release before v3: several chores, no changes.

### v2.0.2

- Replaced `any` with `unknown` for internally used type.

### v2.0.1

- Optimization for consumption in browser.

### v2.0.0

- Breaking changes:
  - Targeting ES6,
  - Default export removed,
  - IIFE build removed.
- The distribution becomes ESM first, while remaining dual (CJS support remains).
  - The right files should be chosen automatically from the `dist` folder:
    - for ESM: `index.js` and `index.d.ts`,
    - for CJS: `index.cjs` and `index.d.cts`.
- Features:
  - Performance improvement: 1.6 times faster.
- How to migrate:
  - Replace default import with a named one.

```typescript
// before:
import mergeSx from "merge-sx";
// after:
import { mergeSx } from "merge-sx";
```

## Version 1

### v1.4.0

- Upgraded dependencies.
- Tested on MUI versions up to 5.15.0.

### v1.3.1

- Fixed issue #205 reported by [@mwskwong](https://github.com/mwskwong).
  - The issue was introduced in v1.3.0.
  - Next.js and Webpack used to complain on importing the module with the following error message:

> Module not found: Error: Default condition should be last one

### v1.3.0

- Both CJS and ESM bundles have their own declaration files:
  - `/dist/index.d.ts` for CJS,
  - `/dist/index.d.mts` for ESM.
  - The `exports` entry of `package.json` is adjusted accordingly.

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
