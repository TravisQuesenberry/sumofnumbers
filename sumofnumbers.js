const test = [1, 2, 3, 4];

function sumFor(vals) {
  let total = 0;
  for (const num of vals) {
    total += num;
  }
  return total;
}

console.log(sumFor(test));

function sumRecursion(vals) {
  if (vals.length === 0) {
    return 0;
  }
  return vals[0] + sumRecursion(vals.slice(1, vals.length));
}

console.log(sumRecursion(test));

const sumWhile = (vals) => {
  let total = 0;
  let i = 0;
  while (i < vals.length) {
    total += vals[i];
    i++;
  }
  return total;
};

console.log(sumWhile(test));

const sumTheSimpleWay = (vals) => _.reduce(vals, function (memo, num) { return memo + num; }, 0);

console.log(sumTheSimpleWay(test));
