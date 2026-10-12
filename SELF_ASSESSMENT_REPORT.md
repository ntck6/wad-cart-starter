# Self-assessment — IA#1
Submitted by: 24127336 - Nguyễn Thái Cường
Total I claim: 95 / 100

| Criterion | Max | I claim | Evidence |
|---|---|---|---|
| Behaviour | 30 | 29 | `npm test` green; empty cart → 0, see `src/cart.js:3`; `RangeError` for bad `price`/`qty`, see `src/cart.js:20-24`; `Math.round`, see `src/cart.js:31` |
| Tests | 20 | 19 | 6 tests total; covered free-shipping, empty-cart, `RangeError`, `TypeError` for defensive programming, and missing options cases. |
| Harness | 20 | 19 | `npm test` + `npm run lint`, see `package.json:6-7`; ESLint in `devDependencies`; CI Node 20 runs both lint and test successfully, see `.github/workflows/ci.yml`. CI is fully green. Repo: https://github.com/ntck6/wad-cart-starter.git |
| Brief | 15 | 14 | `BRIEF.md` updated to explicitly allow appending edge-case tests while preserving the original happy-path test. |
| AI-LOG.md | 15 | 14 | 6 detailed entries (Kept / Changed / Rejected) documenting the iterative process, defensive programming, CI setup, and test expansion. |

## What I did not manage
Nothing. All requirements, including defensive programming, 100% test coverage, Linter integration, and passing GitHub Actions CI, have been successfully implemented and verified.

## What I would do differently
I would define the testing constraints more clearly in `BRIEF.md` from the very beginning to avoid the conflict between the "do not edit tests" rule and the rubric's requirement for full test coverage.