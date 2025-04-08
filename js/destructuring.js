// const u = {id: 1, name: 'Hong', age: 29};   // object
// let {id, name, addr} = u; // let id = 1 ⇐ let id = user.id;  let addr = undefined;
// let {id, ...info} = u;

const arr = [1, 2, 3, 4, 5];
let [a, b, ...c] = arr; // let a = arr[0], b = arr[1]
[a, b] = [b, a];
console.log("🚀 ~ arr:", arr);