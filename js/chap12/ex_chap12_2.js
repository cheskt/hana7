const assert = require("assert");

//p.162
const hong = { id: 1, name: "Hong" };
const choi = { id: 5, name: "Choi" };
const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users = [kim, lee, park];

const addUser = (user) => [...users, user];
assert.deepStrictEqual(addUser(hong), [kim, lee, park, hong]);
assert.deepStrictEqual(users, [kim, lee, park]);

// const removeUser = (user) => users.filter((u) => u.id != user.id);
const removeUser = ({ id: pid }) => users.filter(({ id }) => u.id != pid);
assert.deepStrictEqual(removeUser(lee), [kim, park]);
assert.deepStrictEqual(users, [kim, lee, park]);

const changeUser = ({ id: fromId }, to) =>
  users.map((user) => (user.id == fromId ? to : user));

assert.deepStrictEqual(changeUser(kim, choi), [choi, lee, park]);
assert.deepStrictEqual(users, [kim, lee, park]);

console.log("------------------------");

//p.163
const reduce = (arr, fn, initValue) => {
  let i = 0;
  let acc = initValue ?? (i++, arr[0]);
  for (; i < arr.length; i++) {
    acc = fn(acc, arr[i], i, arr);
  }
  return acc;
};

const a10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
assert.deepStrictEqual(
  reduce(a10, (acc, cur) => acc + cur, 1),
  a10.reduce((acc, cur) => acc + cur, 0)
);

assert.deepStrictEqual(
  reduce(users, (acc, user) => acc + user.name),
  users.reduce((acc, user) => acc + user.name)
);

assert.deepStrictEqual(
  reduce(a10, (acc, cur) => acc + cur, 0),
  a10.reduce((acc, cur) => acc + cur, 0)
);
assert.deepStrictEqual(
  reduce(a10, (acc, cur) => acc + cur),
  a10.reduce((acc, cur) => acc + cur)
);
assert.deepStrictEqual(
  reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1),
  [1, 2, 3, 4, 5].reduce((a, b) => a * b, 1)
);

assert.deepStrictEqual(
  reduce(users, (acc, user) => acc + user.name),
  users.reduce((acc, user) => acc + user.name)
);

console.log("------------------------");

//p.164
const square = (n) => n ** 2;
const cube = (n) => n ** 3;
const sqrt = Math.sqrt;

const arr = [1, 2, 3, 4, 5];
const xr1 = arr.map(square).map(sqrt).map(cube);
assert.deepStrictEqual(xr1, [1, 8, 27, 64, 125]);

const xr2 = arr.map((a) =>
  [square, sqrt, cube].reduce((acc, fn) => fn(acc), a)
);
console.log("🚀  xr2:", xr2);
const xr3 = arr.map((a) =>
  [cube, square, sqrt].reduce((acc, fn) => fn(acc), a)
);
console.log("🚀  xr3:", xr3);
const xr4 = arr.map((a) =>
  [square, cube, (n) => n + 1].reduce((acc, fn) => fn(acc), a)
);
console.log("🚀  xr4:", xr4);

console.log("-----------------------");

assert.deepStrictEqual(range(1, 10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(1, 10, 2), [1, 3, 5, 7, 9]);
assert.deepStrictEqual(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(10, 1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

assert.deepStrictEqual(range(5, 5, 0), [5]);
assert.deepStrictEqual(range(1, 5, 0), [1]);
assert.deepStrictEqual(range(5, 5, -1), [5]);
assert.deepStrictEqual(range(5, 5), [5]);
assert.deepStrictEqual(range(0, 0, 5), [0]);
assert.deepStrictEqual(range(1, 5, -1), []);

assert.deepStrictEqual(range(1, 5, 6), [1]);
assert.deepStrictEqual(range(0, 5), [0, 1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(-3, 0), [-3, -2, -1, 0]);

assert.deepStrictEqual(range(5, 1, 1), []);
assert.deepStrictEqual(range(0, -1), [0, -1]);
assert.deepStrictEqual(range(0, -3), [0, -1, -2, -3]);
assert.deepStrictEqual(range(5, 1), [5, 4, 3, 2, 1]);
assert.deepStrictEqual(range(10, 1, -2), [10, 8, 6, 4, 2]);

assert.deepStrictEqual(range(5), [1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(0), [0]);
assert.deepStrictEqual(range(0, 0), [0]);
assert.deepStrictEqual(range(2, 1, -5), [2]);
assert.deepStrictEqual(range(0, -1, -5), [0]);
assert.deepStrictEqual(range(-5), [-5, -4, -3, -2, -1]);

assert.deepStrictEqual(
  range(50),
  Array.from({ length: 50 }, (_, i) => i + 1)
);
assert.deepStrictEqual(
  range(1, 150, 3),
  Array.from({ length: 50 }, (_, i) => i * 3 + 1)
);
