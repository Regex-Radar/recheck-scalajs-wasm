# `recheck-wasm`

> [!NOTE]
>
> This is a custom distribution containing the WASM build output of [`recheck`](https://github.com/makenowjust-labs/recheck/tree/main/packages/recheck) to enable consumers to try the [experimental WASM target](https://www.scala-js.org/doc/project/webassembly.html) for the `recheck` package. When (and if) a WASM build is available in `recheck`, this repo/package will be archived.

> [!WARNING]
>
> The ScalaJS WASM backend is still in experimental status, check the [docs](https://www.scala-js.org/doc/project/webassembly.html) to see its limitations, risks and drawbacks.

## API

This distribution provides the following API:

```ts
// esm-recheck provides the original API
import { check } from '@regex-radar/recheck-wasm';

// NOTE: this is the sync function, and can be computationally heavy and thus block any UI running on the same thread.
const result = check('(a|aa)+', 'g');
```

## Node.JS flags

NodeJS requires the following flags:

-   `--experimental-wasm-exnref`

The following flags are optional, but may improve performance:

-   `--experimental-wasm-imported-strings`

## Build

This repository/package is a distribution of the build output of `recheck`s compilation with WASM as its target. similar to the native and jar build targets of `recheck`.

The build output is not included in the git index, because they are output files from building `recheck`. The files that are copied from `recheck`:

```bash
cp modules/recheck-wasm/target/scala-2.13/recheck-wasm-opt/ lib/
```

## `recheck`

For more information about `recheck` see:

-   [the official documentation](https://makenowjust-labs.github.io/recheck/docs/usage/as-javascript-library)
-   [the GitHub repository](https://github.com/makenowjust-labs/recheck)
