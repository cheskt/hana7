//연습문제 1-1
const isStringNumber = (value: unknown): value is [string, number] =>
  Array.isArray(value) &&
  typeof value[0] === "string" &&
  typeof value[1] === "number";

const f1 = (value: number | string | boolean | [string, number]) => {
  if (isStringNumber(value)) {
    console.log(value[0].toUpperCase(), value[1].toFixed());
  }
};

f1(["a", 1.2]);

//연습문제 1-2
interface Animal {
  name: string;
}

interface Dog extends Animal {
  name: string;
}
interface Cat extends Animal {
  punch(): void;
}

class Retriever implements Dog {
  constructor(public name: string) {}
}

function isDog(a: Animal): a is Dog {
  return a.name !== undefined;
}

const retrv = new Retriever("Maxx");

console.log(isDog(retrv));

//연습문제 2-1
const cart = {
  X: 1,
  Y: 2,
  Z: 3,
};

type T1 = "X" | "Y" | "Z";
type T2 = keyof typeof cart;

//연습문제 2-2
const constCart = {
  X: 1,
  Y: 2,
  Z: 3,
} as const;

type T3 = 1 | 2 | 3;
type T4 = keyof typeof constCart;
