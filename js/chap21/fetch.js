const sampleUrl = "https://jsonplaceholder.typicode.com/users/1";
// const myFetch = (url) => fetch(url).then((res) => res.json());
// const res = myFetch(sampleUrl);
// console.log("🚀 ~ res:", res);
// console.log("🚀 ~ myFetch:", myFetch);

fetch(sampleUrl)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => console.log("data>>", data));
