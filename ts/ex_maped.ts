interface IUser {
  id: number;
  age: number;
  name: string;
}

interface IDept {
  id: number;
  age: string;
  dname: string;
  captain: string;
}

type Combine<T, U> = {
  [k in keyof (T & U)]: k extends keyof T & keyof U
    ? T[k] | U[k]
    : k extends keyof T
      ? T[k]
      : (T & U)[k];
};

type CombineGood<T, U> = {
  [k in keyof (T & U)]: k extends keyof T & keyof U ? T[k] | U[k] : (T & U)[k];
};

type ICombined = Combine<IUser, IDept>;

let combineX: ICombined = {
  id: 0,
  age: 33,
  name: "aaa",
  dname: "bbb",
  captain: "ccc",
};
let combineY: ICombined = {
  id: 0,
  age: "33세",
  name: "aaa",
  dname: "bbb",
  captain: "ccc",
};

type ArrayItems<T> = T extends (infer X)[] ? X : T;

type StringItem = ArrayItems<string>; // string
type StringArrayItem = ArrayItems<string[]>; // string
type NumberArrayItem = ArrayItems<number[]>; // number
type BooleanArrayItem = ArrayItems<boolean[]>; // boolean
type StringArrayItem2 = ArrayItems<Array<string>>; // string[] ⇒ string
type String2DItem = ArrayItems<string[][]>; // string[]

type Excludex<T, U> = T extends U ? never : T;
type Ee = Exclude<string | number, string>;
type Ex = Excludex<string | number, string>;

//연습문제
function add1(a: number) {
  return `${a}`;
}
function add2(a: number, b: string) {
  return `${a} - ${b}`;
}
function add(a: number, b: string, c: boolean) {
  return `${a} - ${b}`;
}

type FirstArgs<F> = F extends (a: infer First, ...rest: any) => any
  ? First
  : never;

type SecondArgs<F> = F extends (a: any, b: infer Second, ...rest: any) => any
  ? Second
  : never;

type Args<F> = F extends (...args: infer P) => any ? P[number] : never;

type A1 = FirstArgs<typeof add1>; // number
type A2 = FirstArgs<typeof add2>; // number
type A = FirstArgs<typeof add>; // number
type B = SecondArgs<typeof add>; // string
type C = Args<typeof add>; // number | string | boolean
let a: A = 0;
let b: B = "abc";
let c: C = Math.random() > 0.5 ? 1 : "abc";
console.log("🚀 abc:", a, b, c);

type AX = Args<typeof String.prototype.endsWith>;
// ⇒ string | number | undefined
let ax: AX = "str";
ax = 0;

export {};
