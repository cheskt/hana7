// const assert = require('assert'); // CommonJS
import assert from "assert";
import moment from "moment";

// console.log('ddd>>', __dirname);
const hello = "Hello Module!";
console.log("🚀 hello:", hello, moment().startOf("day").fromNow());

assert.equal(hello, "Hello Module!");
