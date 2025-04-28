//연습문제 1
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
  [k in keyof (T & U)]: k extends keyof T & keyof U ? T[k] | U[k] : (T & U)[k];
};

type CombineExclude<T, U, E extends keyof (T & U)> = {
  // [k in Exclude<keyof Combine<T, U>, E>]: (T & U)[k];
  [k in Exclude<keyof Combine<T, U>, E>]: Combine<T, U>[k];
};

type ICombineExclude = CombineExclude<IUser, IDept, "name" | "dname">;

let combineExclude: ICombineExclude = {
  id: 0,
  age: 33,
  captain: "ccc",
};

export {};

//연습문제 2
