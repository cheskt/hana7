//function promi(delay){return new Promise()}
const promi = (delay) =>
  new Promise((resolve, reject) => {
    setTimeout(Math.random() > 0.5 ? resolve : reject, delay, "done!");
  });
// promi(1000, console.log);
promi(1000).then(console.log);

class Promise {
  constructor(nbfn) {
    nbfn(this.runSuccess, this.runFail);
  }

  runSuccess(ret) {
    this.then(ret);
  }

  runFail(err) {
    this.catch(err);
  }

  then(f) {
    this.then = f;
  }

  catch(errFn) {
    this.catchFn = errFn;
  }
}
