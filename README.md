# depsherpa-zod-demo

A minimal npm project that still uses `ZodError.errors` (Zod 3). Open a pull request that bumps `zod` to 4.x and
[DepSherpa](https://github.com/cfngc4594/dep-sherpa) will upgrade it in a disposable clone, show the introduced
`typecheck`/`build` failures, apply the bounded `.errors` → `.issues` recipe repair, verify every check, and stop at
a human decision in the PR comment. Nothing is written to this repository.
