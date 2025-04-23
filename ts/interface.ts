const assert = require("assert");

/*
type Xid = { id: number };
type Xname = { name: string };
type Xage = { age: number };
type X = Xname | Xage;
type Y = Xname & Xage;
type Z = string & number;

type P = Xid | (Xname & Xage); // a + bc
type Q = Xid & (Xname | Xage); // ab + ac

let xx: X = { name: "Hong" };
xx = { age: 33 };

let yy: Y = { name: "Hong", age: 33 };

let pp: P = { id: 1 };
pp = { name: "Kim", age: 44 };
pp = { id: 1, name: "Kim", age: 44 };

let qq: Q = { id: 1, name: "Park" };
qq = { id: 2, age: 33 };

// type TT = { id: number; name?: string };
interface TT {
  readonly id: number;
  name?: string;
}
let tt: TT = { id: 1 };
// tt.id = 100;
tt.name?.toUpperCase();

//----------------------
interface CallSignature {
  (input: string): number; // call signa..
  count: 0; // cf. count: number
  greeting: (name: string) => void;
}

const typedCallSignature: CallSignature = (input) => input.length;

typedCallSignature.count = 0;
typedCallSignature.greeting = (name) => console.log(`Hi, ${name}`);

interface Novel {
  title: string; // 필수 속성 (실제 사용할 속성)
  [key: string]: string | number | boolean;
}

type User = {
  id: number;
  name: string;
};

// interface User {
//   addr: string;
// }

type BoardUser = User & { addr: string };


Array.prototype.mapBy = function (prop: string) {
  return this.map((a) => a[prop]);
};

const users = [
  { id: 1, name: "Hong" },
  { id: 2, name: "Kim" },
];
console.log("mapBy=", users.mapBy("name")); // ['Hong', 'Kim']
*/

// declare global {
//   // interface console {
//   //   bulb: (s: string) => string;
//   // }
//   // interface Array<T> {
//   //   // Array interface 병합
//   //   first(): T;
//   //   mapBy: (prop: string) => any;
//   // }
// }

// const filterBy = function (prop, value: string, isInclude: boolean) {
//   const cb = isInclude
//     ? (a) => a[prop].includes(value)
//     : (a) => a[prop] === value;
//   return this.filter(cb);
// };

// assert.deepStrictEqual(users.filterBy("id", 2), [kim]);
// assert.deepStrictEqual(users.filterBy("name", "i", true), [hong, kim]); // key, value일부, isInclude

// Array.prototype.rejectBy = function (prop, value, isInclude) {
//   const cb = isInclude
//     ? (a) => !a[prop].includes(value)
//     : (a) => a[prop] !== value;
//   return this.filter(cb);
// };
// assert.deepStrictEqual(users.rejectBy("id", 2), [hong, lee]);
// assert.deepStrictEqual(users.rejectBy("name", "i", true), [lee]);

// Array.prototype.findBy = function (prop, value) {
//   return this.find((a) => a[prop] === value);
// };
// assert.deepStrictEqual(users.findBy("name", "Kim"), kim);

// const sortBy = function (this: any[], prop: string): any[] {
//   const [key, direction = "asc"] = prop.split(":");
//   const sign = direction === "desc" ? -1 : 1;
//   return this.sort((a, b) => {
//     const aValue = a[key];
//     const bValue = b[key];

//     if (aValue === bValue) return 0;
//     if (aValue == null) return -1 * sign;
//     if (bValue == null) return 1 * sign;

//     return aValue > bValue ? 1 * sign : -1 * sign;
//   });
// };

// assert.deepStrictEqual(users.sortBy("name:desc"), [lee, kim, hong]);
// assert.deepStrictEqual(users.sortBy("name"), [hong, kim, lee]);

// users.firstObject = kim;
// assert.deepStrictEqual(users.firstObject, kim);
// users.lastObject = hong;
// assert.deepStrictEqual(users.lastObject, hong);
// console.log("🚀 users:", users);
