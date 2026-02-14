function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

function subtract(a, b) {
  return a - b;
}

let result = multiply(2, 5)
console.log(result)

export{ multiply, divide, subtract };

console