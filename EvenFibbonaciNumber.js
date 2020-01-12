
function fiboEvenSum(number) {
  let fibonacciSequence = [];
  let sum = 0;
  

for(var i=0; i<=number; i++) {
  fibonacciSequence[i] = fibonacciSequence[i-2] ? (fibonacciSequence[i-2] + fibonacciSequence[i-1]) : 1;
  
}

  //return fibonacciSequence;
  for(var i=0; i<fibonacciSequence.length; i++){
    if(fibonacciSequence[i] %2 === 0){
      sum += fibonacciSequence[i];
    }
  }
  return sum;
}
console.log(fiboEvenSum(43));
