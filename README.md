# Unhandled TypeError in JavaScript Addition Function

This repository demonstrates a common JavaScript error: a `TypeError` occurring during an addition operation due to unhandled non-numeric inputs.  The original `foo` function handles `null` values but fails for other invalid types.

The `bug.js` file contains the buggy code.  The corrected version, addressing the `TypeError`, is found in `bugSolution.js`.

## Bug Description
The bug occurs when the function `foo` receives arguments that are not numbers.  While null values are explicitly checked, other types (like strings, undefined, or objects) can lead to a runtime error. The `TypeError` arises because the '+' operator behaves differently with non-numeric operands; instead of addition, it attempts string concatenation in some cases, causing issues when trying to combine numbers with non-numbers.

## Solution
The solution involves adding explicit type checking and appropriate handling for non-numeric inputs. This ensures that the function behaves predictably and avoids throwing exceptions in unexpected situations.