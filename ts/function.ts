function add(a: number, b: number) {
  return a + b;
}

const s = "abc";

const add2 = (a: number, b: number): number => a + b;
const add3 = (a: number, b: number) => a + b;

const introduce = (name: string, height?: number) => {
  console.log(`이름 : ${name}`);
  // if (height) console.log(`키 : ${height + 10}`);
  // if (height && height > 0) console.log(`키 : ${height + 10}`);
  if (typeof height === "number") console.log(`키 : ${height + 10}`);
  // console.log(`키 : ${(height ?? 0) + 10}`);
};

introduce("김현준"); // OK
introduce("김현준", undefined); // OK
introduce("김현준", 0); // OK
introduce("김현준", 170); // OK

// ----------------------------------
const introduce2 = (name: string, height: number | undefined) => {
  console.log(`이름 : ${name}`);
  if (typeof height === "number") {
    console.log(`키 : ${height + 10}`);
  }
};

introduce2("김현준", 0);
introduce2("김현준", undefined); // OK
introduce2("김현준", 170); // OK

// -----------------------------------
const introduce4 = (name: string, height = 0) => {
  console.log(`이름 : ${name}`);
  console.log(`키 : ${height + 10}`);
  //  console.log(`키 : ${(height ?? 0) + 10}`);
};

introduce4("김현준4"); // OK
introduce4("김현준4", undefined);
introduce4("김현준4", 170);

// introduce4("김현준", "이재현");
//Error: Argument of type 'string' is not assignable to parameter of type 'number'.

function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const afactorial = (n: number): number => {
  if (n <= 1) return 1;
  return n * afactorial(n - 1);
};

const af = (n: number): number => (n <= 1 ? n : n * af(n - 1));

let singer: (song: number | string) => string;

singer = function (song) {
  // song : string의 타입
  return `Singing : ${typeof song === "string" && song.toUpperCase()}!`; // OK
};

const arr3 = [1, 2, 3, "4", "s"];
console.log(arr3.map((a, i) => "" + a + i));
console.log(arr3.map((a, i) => Number(a) + i));

function ff(params: number): void {
  console.log("ff");
}

const rf1 = ff(1);

type F = () => void;
const f5: F = () => {};
const f6: Function = (n: string) => {};
const obj: Object = {};

function tfn(this: { id: number }, x: string) {
  console.log("tfn>>", this.id, x);
}

function ntfn(this: void, x: string) {
  console.log("ntfn>>", x);
}

tfn.bind({ id: 1 })("X");
ntfn("Y");
