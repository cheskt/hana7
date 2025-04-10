const n =123; //8B
const bi = 123n; //16B

const n__bi = n ==bi;
// console.log('n_bi1:', n__bi);
console.log("🚀 ~ n__bi1:", n__bi);

const n___bi = n === bi;
console.log("🚀 ~ n___bi:", n___bi);

const nAddbi = BigInt(n) + bi;
console.log("🚀 ~ nAddbi:", nAddbi, typeof(nAddbi));

const s = 'abc';
const ss = new String('abc');
const s__ss = s == ss;
console.log("🚀 ~ ss:", s__ss, typeof s);
const s___ss = s === ss;
console.log("🚀 ~ ss:", s___ss , typeof ss);
const sNum = Number(s);
console.log("🚀 ~ sNum:", sNum);
const ssNumber = Number(ss);
console.log("🚀 ~ ssNumber:", ssNumber);
console.log('Number(s) == Number(ss)', Number(s) == Number(ss), isNaN(sNum));

const sss = `${s} - ${ n + Number(bi) }`;
console.log("🚀 ~ sss:", sss);

console.log('-------------------------');
const s1 = Symbol("foo"); 
const s2 = Symbol("foo");
const s1__s2 = s1 == s2;
console.log("🚀 ~ s1__s2:", s1__s2);

const sHong = Symbol.for('H');
const bHong = Symbol.for('H');
const s__b = sHong == bHong;
console.log("🚀 ~ s__b:", s__b);

const undef = undefined;
const nil = null;
const undef__nil = undef == nil;
const undef___nil = undef === nil;
console.log("🚀 ~ undef__nil:", undef__nil);
console.log("🚀 ~ undef___nil:", undef___nil);

const hong = {id:1, name:'hong'};
let kim = {id:Symbol(), name: 'kim'};
console.log(hong === kim);
kim = hong;
console.log(hong === kim);

const o1 = new Object();
const o2 = {};
console.log('ol == o2' , o1 == o2);

const nStr = n.toString();
const nstr2 = (new Number(n)).toString();
console.log("🚀 ~ nStr:", nStr, typeof nStr);
console.log("🚀 ~ nstr2:", nstr2, typeof nstr2);

const nStr16 = n.toString(16);
console.log("🚀 ~ nStr16:", nStr16);
const nStr16d = parseInt(nStr16, 16);
console.log("🚀 ~ nStr16d:", nStr16d);

const d1 = Date();
const d2 = new Date();
console.log(d1 == d2);