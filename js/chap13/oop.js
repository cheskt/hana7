"use strict";
const assert = require("assert");

class Animal {
  static ID = 1;
  constructor(name) {
    this.name = name;
  }

  feed(nutrient) {
    console.log(`feed to ${this.name} :`, nutrient);
  }
}

const petMixin = {
  likePeople() {
    console.log(`${this.name} likes people…`);
  },
};

class Dog extends Animal {
  #age = 0;
  constructor(name, age) {
    super(name);
    // this.name = name;
    this.#age = age;
  }

  setName(newName) {
    this.name = newName;
  }

  getAge() {
    return this.#age;
  }

  get age() {
    return this.#age;
  }

  set age(newAge) {
    console.log("🚀 newAge---:", newAge, this.age);
    this.#age = newAge;
  }

  f() {
    return this.ID;
  }
  static sf() {
    return this.ID;
  }
}

const ani = new Animal();
const aid = ani.ID;
console.log("🚀 aid:", aid);

const dog = new Dog("Dog", 3);
console.log("🚀 dog:", dog.f(), Dog.sf());
console.log("🚀 name:", dog.name, dog.getAge());
dog.setName("Maxx");
// dog.name = 'Maxx';
dog.age = 9;
console.log("🚀 name:", dog.name, dog.age);
dog.feed("VC");
// Object.assign(dog, petMixin);
Object.assign(Dog.prototype, petMixin);
dog.likePeople();

const marry = new Dog("Marry");
marry.likePeople();

// ----------------------
function wrapFullname(user) {
  return new Proxy(user, {
    get(target, prop) {
      // log(target, prop, loginEmp)
      if (prop === "fullname") {
        return `${target.firstName} ${target.lastName}`;
      } else {
        return target[prop];
      }
    },

    set(target, prop, value) {
      if (prop === "fullname") {
        [target.firstName, target.lastName] = value.split(" ");
      } else {
        target[prop] = value;
      }
      return target;
    },
  });
}
const hongOrg = {
  id: 1,
  firstName: "Kildong",
  lastName: "Hong",
  // get fullname() {
  //   return `${this.firstName} ${this.lastName}`;
  // },
  // set fullname(fname) {
  //   console.log('🚀 fname:', fname);
  //   [this.firstName, this.lastName] = fname.split(' ');
  // },
};

const hongx = wrapFullname(hongOrg);

console.log("🚀 fullname11:", hongx.id, hongx.fullname);
hongx.fullname = "Jhon Hong";
console.log("🚀 fullname22:", hongx.fullname);

const kimx = wrapFullname({ id: 2, firstName: "Kildong", lastName: "Kim" });
console.log("🚀 kim:", kimx.id, kimx.fullname);
kimx.id = 5;
kimx.fullname = "Jhon Kim";
console.log("🚀 kim:", kimx.id, kimx.fullname);

console.log("---------------------------------");
const arr = [1, 2, 3, 4, 5];
const hong = { id: 1, name: "Hing" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const users = [hong, lee, kim];

Object.defineProperties(Array.prototype, {
  firstObject: {
    get() {
      return this[0];
    },
    set(value) {
      this[0] = value;
    },
  },
  lastObject: {
    get() {
      return this.at(-1);
    },
    set(value) {
      this[this.length - 1] = value;
    },
  },
});

assert.deepStrictEqual([arr.firstObject, arr.lastObject], [1, 5]);

assert.deepStrictEqual(users.firstObject, hong);
assert.deepStrictEqual(users.lastObject, kim);

Array.prototype.mapBy = function (prop) {
  return this.map((a) => a[prop]);
};
assert.deepStrictEqual(users.mapBy("id"), [1, 3, 2]);
assert.deepStrictEqual(users.mapBy("name"), ["Hing", "Lee", "Kim"]);

Array.prototype.filterBy = function (prop, value, isInclude) {
  const cb = isInclude
    ? (a) => a[prop].includes(value)
    : (a) => a[prop] === value;
  return this.filter(cb);
};
assert.deepStrictEqual(users.filterBy("id", 2), [kim]);
assert.deepStrictEqual(users.filterBy("name", "i", true), [hong, kim]); // key, value일부, isInclude

Array.prototype.rejectBy = function (prop, value, isInclude) {
  const cb = isInclude
    ? (a) => !a[prop].includes(value)
    : (a) => a[prop] !== value;
  return this.filter(cb);
};
assert.deepStrictEqual(users.rejectBy("id", 2), [hong, lee]);
assert.deepStrictEqual(users.rejectBy("name", "i", true), [lee]);

Array.prototype.findBy = function (prop, value) {
  return this.find((a) => a[prop] === value);
};
assert.deepStrictEqual(users.findBy("name", "Kim"), kim);

Array.prototype.sortBy = function (prop) {
  const [key, direction = "asc"] = prop.split(":");
  const sign = direction === "desc" ? -1 : 1;
  return this.sort((a, b) => (a[key] > b[key] ? 1 * sign : -1 * sign));
};
assert.deepStrictEqual(users.sortBy("name:desc"), [lee, kim, hong]);
assert.deepStrictEqual(users.sortBy("name"), [hong, kim, lee]);

users.firstObject = kim;
assert.deepStrictEqual(users.firstObject, kim);
users.lastObject = hong;
assert.deepStrictEqual(users.lastObject, hong);
console.log("🚀 users:", users);
