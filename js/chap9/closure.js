/*
const DC_RATE = 0.5; //스네이크 케이스

function discount() {
    const dcRate = 0.5;
    return function(price){
        return price * dcRate;
    }
}

const discount2 = () => price => price * DC_RATE;

//currying
const MENU = {chinese: ['자장면', '탕수육', 'c'], 
    italian: ['pasta', 'pizza']};
function restaurant(kind) {
    const menu = MENU[kind];
    return function(menuIndex){
        return menu[menuIndex]; //menu.['chinese']
    }
}

const lunch = restaurant('chinese');
console.log(lunch(1));

const dinner = restaurant('italian');
console.log(dinner(0), dinner(1));
*/

//출입자 수를 게이트 별로 구하는 함수 작성
class Counter{
    #currCount = 0;
    plus(){
        this.#currCount += 1;
    }
    minus(){
        this.#currCount -= 1;
    }
}

function getCounter(){
    let currCount = 0;
    return{
        plus() {currCount += 1;},
        minus() {currCount -= 1;},
        count() {return currCount;}
        //count: () => currCount
    };
}

const gate1 = getCounter();
const gate2 = getCounter();

gate1.plus();
gate2.plus();
gate2.minus();

console.log('gate1 >> ', gate1.count());
console.log('gate2 >> ', gate2.count());

console.log('--------------------------');

//팩토리얼 재귀함수
let cnt = 0;
function factorial(n){
    cnt++;
    if(n == 1) return 1;
    return n * factorial(n-1);
}

const f5 = factorial(5);
console.log("🚀 f5 :", f5, cnt);

//팩토리얼 반복문(성능은 이게 더 좋음)
let n = 3;
let sum = 1;
for(let i = n; i > 0; i -= 1){
    sum = sum * i;
}
console.log("🚀 ~ sum:", sum);

//팩토리얼 TCO
function factorialTCO(n, num1=1) {
    if (n == 1) return num1;
    else return factorialTCO(n - 1, num1 *= n);
}
const f4 = factorialTCO(4);
console.log("🚀 ~ f4:", f4);
