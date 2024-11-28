import { fail } from "node:assert";
import { $ } from "bun";
import { type ReleaseType, inc, valid as isValidVersion } from "semver";

const path = "./packages/merge-sx/package.json";
const variants: ReleaseType[] = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease",
];

const isValidTarget = (subject: string): subject is ReleaseType =>
  (variants as string[]).includes(subject);

const isDirty = async () => (await $`git status --porcelain`.quiet()).text();

const target = Bun.argv.pop();
const json = await Bun.file(path).json();
const { version: current } = json;

if (!isValidVersion(current))
  throw new Error(`Invalid current version ${current}`);

if (await isDirty())
  throw new Error(
    "There are uncommitted changes. Commit them before releasing.",
  );

const desired = isValidVersion(target)
  ? target
  : target && isValidTarget(target)
    ? inc(current, target, "beta", "1")
    : fail("invalid target version");

if (!desired) throw new Error("Failed to bump");
console.debug(current, "—>", desired);

const output = JSON.stringify(
  Object.assign(json, { version: desired }),
  null,
  2,
);
await Bun.write(path, `${output}\n`);

await $`git add ${path}`;
await $`git commit -m v${desired}`;
await $`git tag v${desired}`;
await $`git push`;
await $`git push --tags`;
