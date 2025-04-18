const assert = require("assert");

//1.테스트를 위한 임의의 시간(1초 미만)에 resolve를 실행하는 randTime 함수를 작성하시오.
// const randTime = (val) =>
//   new Promise((resolve, reject) => {
//     setTimeout(resolve, Math.random() * 1000);
//   });

// randTime(100).then(console.log);

// [1, 2, 3, 4, 5].forEach((a) => randTime(a).then(console.log));

//2.다음 코드를 Promise를 이용하여 refactoring 하시오.
// const depthTimer = (sec) => {
//   return new Promise((resolve) =>
//     setTimeout(() => {
//       console.log("depth") + sec, new Date();
//       resolve(sec + 1);
//     }, sec * 1000)
//   );
// };

// depthTimer(1)
//   .then((res) => {
//     depthTimer(res);
//     return depthTimer(res);
//   })
//   .then(depthTimer)
//   .catch((err) => console.error("err"));

// let r = 1;
// while (r <= 3) {
//   r = await depthTimer(r);
// }
// const r1 = await depthTimer(1);
// const r2 = await depthTimer(r1);
// const r3 = await depthTimer(r2);

//3 다음 코드에서 promiseAll 함수를 직접 작성하시오.
const randTime = (value) =>
  new Promise((resolve) => {
    setTimeout(resolve, Math.random() * 1000, value);
  });

const promiseAll = (promises) =>
  new Promise((resolve, reject) => {
    const results = [];
    for (let i = 0; i < promises.length; i++) {
      let runCnt = 0;
      promises[i]
        .then((res) => {
          results[i] = res;
          runCnt += 1;
          if (promis.length == runCnt) resolve(results);
        })
        .catch(reject);
    }
  });

console.time("x");

promiseAll([randTime(1), randTime(2), randTime(3)])
  .then((arr) => {
    console.table(arr);
    assert.deepStrictEqual(arr, vals);
    console.timeEnd("x");
  })
  .catch(console.error);

promiseAll([randTime(11), Promise.reject("RRR"), randTime(33)])
  .then((array) => {
    console.log("여긴 과연 호출될까?!");
  })
  .catch((error) => {
    console.log("reject!!!!!!>>", error);
  });

//4 다음 코드에서 promiseAllSettled 함수를 직접 작성하시오.
// const randTime1 = (val) =>
//   new Promise((resolve, reject) => {
//     setTimeout(resolve, Math.random() * 1000);
//   });

// promiseAllSettled([randTime1(11), Promise.reject("RRR"), randTime1(33)])
//   .then((array) => {
//     console.table(array);
//     // console.log(JSON.stringify(array, null, '  '));
//     console.log("여긴 과연 호출될까?!");
//     assert.deepStrictEqual(array, allSettledResults);
//   })
//   .catch((error) => {
//     console.log("reject!!!!!!>>", error);
//   });

// const allSettledResults = [
//   {
//     status: "fulfilled",
//     value: 11,
//   },
//   {
//     status: "rejected",
//     reason: "RRR",
//   },
//   {
//     status: "fulfilled",
//     value: 33,
//   },
// ];
