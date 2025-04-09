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

const mra5 = makeReverseArray(5);
console.log("🚀 ~ mra5:", mra5);

const maTCO10 = makeArrayTCO(10);
console.log("🚀 ~ maTCO10:", maTCO10);
