function fibonacci(n) {
  return (n <= 1) ? 1 : (fibonacci(n - 1) + fibonacci(n - 2));
}

function fiboEvenSum(number) {
  let fibonacciSequence = [];
  let sum;

  for (let i = 1; i <= (number) ; i++) {
    if (fibonacci(i) % 2 === 0) {
      fibonacciSequence.push(fibonacci(i));
    }
  }

  sum = fibonacciSequence.reduce((acc, val) => acc + val);
  return sum;
}
console.log(fiboEvenSum(18));
