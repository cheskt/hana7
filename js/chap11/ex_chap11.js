globalThis.name = "GlobalName";
this.name = "ModuleName";

const dog = {
  name: "Maxx",
  showMyName() {
    console.log(`My name is ${this.name}.`);
  },
  whatsYourName() {
    setTimeout(this.showMyName.bind(this), 1000); // (1)
    setTimeout(() => this.showMyName(), 1500); // (2)
    // const timer = setTimeout(this.showMyName, 1000);
    // timer.name = 'TTTT';
    // console.log('🚀 timer:', timer);
  },
};

// dog.whatsYourName();

// const weeks = ['일', '월', '화', '수', '목', '금', '토'];

// closure
// const weekName = () => weekNo => weeks[weekNo];
function weekNameX() {
  return function (weekNo) {
    const weeks = ["일", "월", "화", "수", "목", "금", "토"];
    return weeks[weekNo];
  };
}

const weekName = () => (weekNo) => {
  const weeks = ["일", "월", "화", "수", "목", "금", "토"];
  return weeks[weekNo];
};

const getWeekName = weekName();

// const getWeekName = function (weekNo) {
//   weeks[weekNo] = 555;
//   return `${weeks[weekNo]}요일`;
// };

// const f = () => () => {}
// const d = (cb, delay) => (...args) => {}
const debounce = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(cb, delay, ...args);
  };
};

const throttle = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(cb, delay, ...args);
    timer = null;
  };
};

Array.prototype.mapx = function (f) {
  const results = [];
  for (let i = 0; i < this.length; i++) {
    results[i] = parseInt(this[i], i, this);
  }
  return results;
};

const farr = [1, 2, 3, 4];
const rets = farr.mapx((a, i) => console.log(a, i, a * i));
console.log("🚀 rets:", rets);

const roots = farr.map(Math.sqrt);
console.log("🚀 roots:", roots);

function add(a, b, c) {
  return a + 10;
}
console.log(";;", add(1, 2, 3, 4));

// const unary = f => (f.length === 1 ? f : (...args) => f(args[0]));
const unary = (f) => (f.length === 1 ? f : (arg) => f(arg));

const sarr = ["11", "22", "33", "44", "55"];
const sresults = sarr.map(parseInt);
console.log("🚀 sresults:", sresults);
const sresults2 = sarr.map(unary(parseInt));
console.log("🚀 sresults2:", sresults2);

console.log("----------------------------------");

const once = (f) => {
  let done = false;
  return (...args) => {
    if (done) return;
    done = true;
    return f(...args);
  };
};

const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn(2, 7)); // undefined
console.log(fn(3, 8)); // undefined

function fivePart(x, y) {
  return `fivePart ${x}, ${y}, id: ${this.id}`;
}
const fnx = once(fivePart.bind({ id: 11 }));
console.log("fnx>>", fnx(1, 2));

const fn2 = once(fivePart);
const fn3 = fn2.bind({ id: 22 });
console.log(fn3(3, 4));

const onceAgain = (f, rebirthDelay) => {
  let done = false;
  return (...args) => {
    if (done) return;
    done = true;
    setTimeout(() => (done = false), rebirthDelay);
    return f(...args);
  };
};

const fn1sec = onceAgain(fivePart, 1000);
let cnt = 0;

/*
const cb = () => console.log(`${++cnt / 10}초`, fn1sec(cnt, 0.1));
setInterval(cb, 100);
*/
console.log("- -  - -  - - - - - - -");
const before = () => console.log("before....");
const after = (result) => console.log("after...", result);

const someFn = (name, greeting) => `${greeting}, ${name}`;
const someFn2 = (id, nickname, email, level) =>
  `${id}/${nickname}/${email}/${level}`;

const template = (f) => {
  return (...args) => {
    before();
    const result = f(...args);
    // setTimeout(() => after(result), 0);
    // setImmediate(after, result);
    process.nextTick(after, result);

    return result;
  };
};

// console.log('^^^^^', __dirname);

const temp = template(someFn);
const temp2 = template(someFn2);
console.log("temp1>>", temp("sico", "hello"));
console.log("temp2>>", temp2(1, "sico", "sico@gmail.com", 5));

console.log("=====================");
// const weeks = ['일', '월', '화', '수', '목', '금', '토'];
// let widx = -1;
// const getNextWeekBad = () => {
//   widx += 1; // side-effect!
//   if (widx >= weeks.length) widx = 0;
//   return `${weeks[widx]}요일`;
// };

const getNextWeek = (() => {
  const weeks = ["일", "월", "화", "수", "목", "금", "토"];
  let widx = -1;

  return () => `${weeks[++widx]}요일`;
})();

let cntx = 0;
const intl = setInterval(() => {
  // widx += 2; // side-effect!
  console.log("call", cntx, getNextWeek());
  if ((cntx += 1) === 7) clearInterval(intl);
}, 1000); // FIXME: 1000으로 변경할 것!!
