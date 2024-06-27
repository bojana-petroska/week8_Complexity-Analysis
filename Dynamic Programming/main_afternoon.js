// Sum of Numbers (Recursive)

// Summary recursively
const sum = (n) => {
  if (typeof n === 'number') {
    if (n < 0) return n;
    if (n === 0) return 0;
    if (n === 1) return 1;

    return n = n + sum(n - 1);
  }

  return 'just put a number!';
};

const sum1 = (n) => {
  let summary = 0;

  if (n <= 0) return 0;

  summary = n + sum1(n - 1);
  return summary;
};

const sum2 = (n) => {
  let result = [];

  if (n <= 0) return 0;

  if (result[n]) {
    return result[n];
  }

  result[n] = n + sum2(n - 1);
  return result[n];
};

const sum3 = (n) => {
  let summary = [0, 1];

  for (let i = 2; i <= n; i++) {
    summary[i] = i + summary[i - 1];
  }

  return summary[n];
};

console.log(sum('bo'));
console.log(sum(4));
console.log(sum(-4));
console.log(sum(6));
console.log(sum3(5));
