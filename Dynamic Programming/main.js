console.log('bo');

// let fibNDP = 0;
// const fib = (n) => {
//   if (n <= 1) {
//     return n;
//   }
//   fibNDP++;
//   console.log(`fib of: ${n}`);
//   return fib(n - 1) + fib(n - 2);
// };

// const fibMemo = [];
// let fibDP = 0;

// const fibM = (n) => {
//   if (n <= 1) {
//     return n;
//   }

//   if (fibMemo[n]) {
//     return fibMemo[n];
//   }

//   fibDP++;
//   console.log(`fib of: ${n}`);
//   fibMemo[n] = fibM(n - 1) + fibM(n - 2);
//   return fibMemo[n];
// };

let fibTSteps = 0;
const fibTabulation = (n) => {
    let fibTable = [0, 1]; // Base cases

    for(let i = 2; i <= n; i++) {
        fibTable[i] = fibTable[i-1] + fibTable[i-2];
        fibTSteps++;
    }

    return fibTabulation[n];
}

// Let’s write our own function that calculates the factorial of a certain number by using recursive function in JS. 
// The factorial of a non-negative integer nn (denoted as n!n!) is the product of all positive integers less than or equal to nn.
// For example:
// 5!=5×4×3×2×1=120 
// 3!=3×2×1=6
// 0!=10!=1 (By convention, the factorial of 0 is 1)

let fibNDP = 0;
const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  fibNDP++;

  return n * factorial(n - 1);
};

//console.log(factorial(3));

let facTSteps = 0;
const facTabulation = (n) => {
    let facTable = [0, 1]; // Base cases

    for(let i = 2; i <= n; i++) {
        facTable[i] = i * facTable[i-1];
        facTSteps++;
    }

    return facTabulation[n];
}

const calculateFib = () => {
  const number = document.getElementById('number').value;
  const result = factorial(parseInt(number));
  factorial(parseInt(number));
  facTabulation(parseInt(number));
  console.log(`Without DP: ${fibNDP}`);
  //console.log(`With DB: ${fibDP}`);
  console.log(`With DP with Tabulation: ${facTSteps}`);
  document.getElementById('output').innerText = result;
};
