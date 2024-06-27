console.log('bo');

let fibNDP = 0;
const fib = (n) => {
  if (n <= 1) {
    return n;
  }
  fibNDP++;
  console.log(`fib of: ${n}`);
  return fib(n - 1) + fib(n - 2);
};

const fibMemo = [];
let fibDP = 0;

const fibM = (n) => {
  if (n <= 1) {
    return n;
  }

  if (fibMemo[n]) {
    return fibMemo[n];
  }

  fibDP++;
  console.log(`fib of: ${n}`);
  fibMemo[n] = fibM(n - 1) + fibM(n - 2);
  return fibMemo[n];
};

const calculateFib = () => {
  const number = document.getElementById('number').value;
  const result = fibM(parseInt(number));
  fib(parseInt(number));
  console.log(`Without DB: ${fibNDP}`)
  console.log(`With DB: ${fibDP}`)
  document.getElementById('output').innerText = result;
};
