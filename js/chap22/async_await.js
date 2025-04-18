const afterTime = (sec) =>
  new Promise((resolve) => setTimeout(resolve, sec * 1000, sec));

function trycatchFn() {
  try {
    throw new Error("오류났어요!");
  } catch (err) {
    console.error(err);
  } finally {
    console.log("finally!!!");
  }
}

const promiseThrow = () =>
  new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        // throw new Error('오류났어요!');
        if (Math.random() > 0.5) reject(new Error("오류났어요!"));
        resolve(999);
      }, 1000);
    } catch (err) {
      console.error("catch>>", err);
    } finally {
      console.log("finally!!!");
    }
    console.log("Then End");
  });

// promiseThrow()
//   .then(console.log)
//   .catch(err => console.log('PromiseCatch:', err));

const asyncThrow = async () => {
  try {
    const res = await promiseThrow();
    console.log("🚀 res:", res);
  } catch (err) {
    console.error("catch>>", err);
  } finally {
    console.log("finally!!!");
  }
};

// asyncThrow();

console.time("MapTime");
const mapResult = [1, 2, 3].map(async (val, i) => {
  const r = await afterTime(val);
  console.log("🚀 r:", r, i);
  if (i === 2) console.timeEnd("MapTime", i);
  return r;
});
console.log("mapResult=", mapResult);

const mapResults = [1, 2, 3].map((val) => afterTime(val));
console.log("🚀 mapResults:", mapResults);
// const results = await Promise.allSettled(mapResults);
const results = await Promise.all(mapResults);
console.log("🚀 results:", results);

//------------------
const randTime = (value) =>
  new Promise((resolve) => setTimeout(resolve, 1000 * Math.random(), value));

const promiseAllSettled = (promises) =>
  new Promise((resolve) => {
    const results = [];
    let runCnt = 0;
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((value) => {
          const status = "fulfilled";
          results[i] = { status, value };
        })
        .catch((reason) => {
          const status = "rejected";
          results[i] = { status, reason };
        })
        .finally(() => {
          runCnt++;
          if (runCnt === promises.length) resolve(results);
        });
    }
  });

promiseAllSettled([randTime(11), Promise.reject("RRR"), randTime(33)])
  .then((array) => {
    console.table(array);
    console.log(JSON.stringify(array, null, "  "));
    console.log("여긴 과연 호출될까?!");
    assert.deepStrictEqual(array, allSettledResults);
  })
  .catch((error) => {
    console.log("reject!!!!!!>>", error);
  });

//------------
const randTime2 = (value) =>
  new Promise((resolve) => setTimeout(resolve, 1000 * Math.random(), value));

const promiseAllSettled2 = (promises) =>
  new Promise((resolve) => {
    const results = [];
    let runCnt = 0;
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((value) => {
          const status = "fulfilled";
          results[i] = { status, value };
        })
        .catch((reason) => {
          const status = "rejected";
          results[i] = { status, reason };
        })
        .finally(() => {
          runCnt++;
          if (runCnt === promises.length) resolve(results);
        });
    }
  });

promiseAllSettled2([randTime(11), Promise.reject("RRR"), randTime(33)])
  .then((array) => {
    console.table(array);
    console.log(JSON.stringify(array, null, "  "));
    console.log("여긴 과연 호출될까?!");
    assert.deepStrictEqual(array, allSettledResults);
  })
  .catch((error) => {
    console.log("reject!!!!!!>>", error);
  });

//------------------------
const sampleUrl = "https://jsonplaceholder.typicode.com/users/1";
const myFetch = (url) => fetch(url).then((res) => res.json());
const res = myFetch(sampleUrl);
// console.log('🚀 res:', res);
// res.then(console.log);

const myFetchAsyncBad = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  console.log("🚀 data:", data);
  return data;
};

const myFetchAsync = async (url) => {
  const res = await fetch(url);
  return res.json();
};

(async () => {
  const res2 = await myFetchAsync(sampleUrl);
  console.log("🚀 res2:", res2);
})();

// res2.then(console.log);

// fetch(sampleUrl)
// .then(res => {
//   console.log('🚀 res:', res);
//   return res.json();
// })
// .then(data => console.log('data>>', data));
