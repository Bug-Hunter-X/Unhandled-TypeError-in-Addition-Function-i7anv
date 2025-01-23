function foo(a, b) {
  if (a === null || b === null || typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Return NaN for invalid inputs
  }
  return a + b; // Addition is safe now
}
//Alternative solution that throws error instead of returning NaN
function foo(a, b) {
  if (a === null || b === null || typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b; 
} 