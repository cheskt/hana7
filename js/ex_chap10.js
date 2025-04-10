const assert = require("assert");

//연습문제 1
const arr = [100, 200, 300, 400, 500, 600, 700];
for (const index1 in arr) {
  console.log(index1);
}
console.log("-------------");

for (const index1 in arr) {
  console.log(arr[index1]);
}
console.log("-------------");

const obj = { name: "Kim", addr: "Yongsan", level: 1, role: 9, receive: false };

for (const key in obj) {
  console.log(key);
}
console.log("-------------");

for (const key in obj) {
  console.log(obj[key]);
}
console.log("-------------");

for (const [key, value] of Object.entries(obj)) {
  console.log(value);
}
console.log("-------------");

Object.defineProperty(obj, "level", { enumerable: false });

for (const [key, value] of Object.entries(obj)) {
  console.log(value);
}
console.log("-------------");

Object.freeze(obj, "role");

//연습문제 2
data = [
  ["A", 10, 20],
  ["B", 30, 40],
  ["C", 50, 60, 70],
];

function makeObjectFromArray(arrdata) {
  let retObj = {};
  for (const [k, ...v] of arrdata) {
    //retObj[k] = v;
    retObj = { ...retObj, [k]: v };
  }
  return retObj;
}

function makeArrayFromObject(objdata) {
  const retArr = [];
  for (const [k, v] of Object.entries(objdata)) {
    retArr.push([k, ...v]);
    retArr = [...retArr, [k, ...v]];
  }
  return retArr;
}

assert.deepStrictEqual(makeObjectFromArray(data), {
  A: [10, 20],
  B: [30, 40],
  C: [50, 60, 70],
});

assert.deepStrictEqual(
  makeArrayFromObject({
    A: [10, 20],
    B: [30, 40],
    C: [50, 60, 70],
    data,
  })
);
console.log("------------------");

//연습문제 3
function shallowCopy(obj) {
  const ret = {};
  for (const [k, v] of Object.entries(obj)) {
    ret[k] = v;
  }
  //   for (const k of Object.keys(obj)) {
  //     ret[k] = obj[k];
  //   }
  return ret;
}

const kim = { nid: 3, nm: "Kim", addr: "Pusan" };
//const newKim1 = shallowCopy(kim);
//const newKim1 = Object.assign({}, kim);
const newKim1 = { ...kim };
newKim1.addr = "Daegu";
console.log(kim.addr !== newKim1.addr); // true면 통과!

//deepcopy
const kim2 = {
  nid: 3,
  nm: "Kim",
  nil: null,
  addr: { city: "Pusan", road: "Haeundaero", zip: null, detail: { dong: 123 } },
};

function shallowCopy(obj) {
  const ret = {};
  for (const [k, v] of Object.entries(obj)) {
    //ret[k] = v != null && typeof v == "object" ? { ...v } : v;
    if (v != null && typeof v == "object") {
      ret[k] = deepCopy(v);
    } else {
      ret[k] = v;
    }
  }
  return ret;
}

const newKim2 = deepCopy(kim2);
newKim2.addr.city = "Daegu";
console.log(kim2.addr.city !== newKim2.addr.city); // true면 통과!

console.log(kim2.addr.city, "vs", newKim2.addr.city);
