/*
// 'use strict'

f = 1;
NaN = 1;
Infinity = 0;
function f(a, a) { console.log('outer f',a); }
delete f; // error
{
    f(100);
    function f(a) { console.log('block f', a); }
}
f(200);

*/
var gg = 1;
let bb = 2;
/*
function fx(a){}
console.log('****', fx.name, fx.length);
function fx(a,b){} <- fx(a) 덮어씀
*/
function f1(x,y) { 
  var gg = 11;   let bb = 22;
  console.log('f1>', gg, bb, zz, f2, f2.length); // 3 f2inner2
  f2('first'); 
  { 
    const xx = 99; 
    f2('nest-first');
    var zz = 88;  
    function f2(t) { console.log(t, 'nested', xx, zz); }  // hoisting은 undefined로?!
    let lll = 0;   
  }
  function f2(t, u) { console.log(t, 'inner', xx, zz); }  // f1 평가 시 f1 상단에 <f.o>로 hoisting
  function f2(t, u, v) { console.log(t, 'inner2', xx, zz); } // hoisting 시, 위 라인의 f2를 덮어씀!
  var zz = 800;
  f2('second'); 
}
function f2(g) {
  console.log(g, 'global f2>', gg, bb, xx, kk); 
}
let xx = 9;
if (gg > 0) { var kk = 33; const yy = 9; }
f1(1,2);   
console.log(kk);  
f2('third');  