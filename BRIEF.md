**Task Objective:** 
Implement the `cartTotal(items, options)` function in `src/cart.js` to calculate the final cart price. Review the step-by-step logic before writing code.

**Context References:**
- Follow the rules defined in `@homework.mdc` and `@karpathy-guidelines.mdc`.
- Target file: `src/cart.js`.
- Test file: test/cart.test.js (You MUST append new test cases for edge cases, but do NOT modify the existing happy-path test).

**Business Flow:**
1. Check if the cart is empty or null. If yes, return 0 immediately without further calculation.
2. Iterate through items to calculate the `subtotal` (price * quantity).
3. Validate inputs during iteration: if any `price` is negative or `quantity` is not a positive integer, throw a `RangeError`.
4. Calculate VAT based on the `options.vat` rate.
5. Determine shipping fee: if `subtotal >= options.freeShippingThreshold`, shipping is 0; otherwise, apply `options.shipping`.
6. Calculate final total: `subtotal + VAT + shipping`.
7. Round the final total to the whole đồng.

**Acceptance Criteria:**
- Running `npm test` must result in 100% passing tests (green).
- The function must correctly throw a `RangeError` for bad inputs.
- The returned output must be a single rounded Number.

**Technical Constraints:**
- Use plain JavaScript only.
- ZERO external dependencies or libraries.
- Do not create any helper files.
- The assistant must run `npm test` to verify its own code before considering the task done.