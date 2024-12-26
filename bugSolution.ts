function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers');
  }
  return a + b;
}

let result = add(10, 20); // Works correctly

try {
  let result2 = add("hello", 10); // Throws an error
} catch (error) {
  console.error(error);
}

//Alternative solution using type guards
function isNumber(value: any): value is number {
    return typeof value === 'number';
}

function add2(a: any, b: any): number {
    if(!isNumber(a) || !isNumber(b)) {
        throw new Error('Parameters are not numbers');
    }
    return a + b;
}