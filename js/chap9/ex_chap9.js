const assert = require("assert");
/*
//재귀함수
function makeArray(n) {
  if (n == 1) return [1];
  return [...makeArray(n - 1), n];
}

function makeReverseArray(n) {
  if (n == 1) return [1];
  return [n, ...makeReverseArray(n - 1)];
}

function makeArrayTCO(n, acc = [9, 10]) {
  if (n == 1) return [1, ...acc];
  return makeArrayTCO(n - 1, [n, ...acc]);
}

const ma10 = makeArray(10);
console.log("🚀 ~ ma10:", ma10);
// assert.deepEqual(ma10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 10]);
assert.equal(ma10[0], "1");
assert.strictEqual(ma10[0], 1);

const mra5 = makeReverseArray(5);
console.log("🚀 ~ mra5:", mra5);
assert.deepEqual(mra5, [5, 4, 3, 2, 1]);

const maTCO10 = makeArrayTCO(10);
console.log("🚀 ~ maTCO10:", maTCO10);
*/

//피보나치 수열
//loop
let loopRunCnt = 0;
function loopFibonacci(n) {
  let arr1 = [];
  arr1[0] = 0;
  arr1[1] = 1;

  arr1.length = n + 1;
  for (let i = 2; i <= n; i++) {
    arr1[i] = arr1[i - 1] + arr1[i - 2];
  }
  return arr1[n];
}
console.log(loopFibonacci(5));

console.log("-----------------");

function fiboloop(n) {
  prev = 0;
  curr = 1;
  for (let i = 2; i <= n; i += 1) {
    /*
    let t = prev;
    prev = curr;
    curr = t + curr;
    */
    loopRunCnt++;
    [prev, curr] = [curr, prev + curr];
  }

  return curr;
}
console.log("🚀 ~ fiboloop:", fiboloop(5));

//재귀함수
let recurRunCnt = 0;
function recurFibonacci(n) {
  recurRunCnt++;
  if (n < 2) return n;
  return recurFibonacci(n - 1) + recurFibonacci(n - 2);
}
console.log(recurFibonacci(7));

//memoized
let memoRunCnt = 0;
const memoFibonacci = memoized(function (n) {
  memoRunCnt++;
  if (n <= 1) return n;
  return memoFibonacci(n - 2) + memoFibonacci(n - 1);
});

function memoized(fn) {
  const cache = {};
  return function (k) {
    return cache[k] || (cache[k] = fn(k));
  };
}

const memo5 = memoFibonacci(5);
console.log("🚀 ~ memo5:", memo5);

const memo13 = memoFibonacci(13);
console.log("🚀 ~ memo13:", memo13);

const memo30 = memoFibonacci(30);
console.log("🚀 ~ memo30:", memo30);

console.log("🚀 loopRunCnt:", loopRunCnt);
console.log("🚀 recurRunCnt:", recurRunCnt);
console.log("🚀 memoRunCnt:", memoRunCnt);
