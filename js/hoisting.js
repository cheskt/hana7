
console.log(zz); 
// ReferenceError: zz is not defined
let zz = 9;  // 이 라인 실행 시 암묵적 var!
 console.log(zz);     
// OK
 console.log(globalThis['zz']);


//  var zz;
//  console.log(this);
//  console.log(globalThis);

console.log(i); // not defined error!!
i = 1; // turn-off freshness!!
console.log('x=', x);
x = 1;
console.log(ff, f);
f();
{
    function f() { console.log('f>', x, xx); }
    const b = 1;
    f();
    x = 2;
    b = 2;
}

if (x >= 2) {
 let yy = 5;
 y = 5; yy = 55;
}
xx = 100;
ff();