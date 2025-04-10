/*
//연습문제 1
const user = { id: 1, name: 'Hong', addr: { city: 'Seoul' } };

function f1({id, name}){
    console.log(id,name);
}

// function f1(obj{
//     const {id: id, name: name} = obj;
//     console.log(id, name);
// })

function f2({id, name}){
    console.log(id, name);
}

const hong = {id: 1, name: 'Hong'};
const lee = {id: 2, name: 'Lee'};

f1(hong); //1, 'HONG'
f2({id, name}); //2, 'LEE'

console.log('---------------------');

//연습문제 2
const user = {id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul'};
const {passwd, ...userInfo} = user;
console.log("🚀 ~ userInfo:", userInfo);

console.log('---------------------');

//연습문제 3
const arr = [[{id: 1}], [{id:2}, {id: 3}]];
const [[{id: id1}], [{id: id2}, {id: id3}]] = arr;
console.log(id1, id2, id3); 
*/
console.log('---------------------');

//연습문제 4
const user = {name: 'Hong', passwd: 'xyz', addr: 'Seoul'};
function getUserValueExceptInitial(k) {
  const {[k]: val} = user;
  const [, ...rest] = val;
  return rest.join('');
}
console.log(getUserValueExceptInitial('name')); // 'ong'
console.log(getUserValueExceptInitial('passwd')); // 'yz'
console.log(getUserValueExceptInitial('addr')); // 'eoul'