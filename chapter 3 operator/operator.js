
// CHAPTER 2:
// .........operator .........
// operator is a symbol or keyword that performs a specific operation on one or more values

// 1. Arithmetic operators
let a=5;
let b=7;
console.log("a=",a,"b=",b);
console.log("a+b=",a+b)
console.log("a-b=",a-b)
console.log("a*b=",a*b)
console.log("a/b=",a/b)
console.log("a%b=",a%b)
console.log("a**b=",a**b)

// 2: unary arthematic
console.log("a++=",a++)
console.log("a++",a)
console.log("++a=",++a)
console.log("a--=",a--)
console.log("a--",a)
console.log("--a=",--a)

// 2:Assignment  operator
let a =5;
let b= 2;
a +=4;
a -=4;
a *=4;
a %=4;
a **=4;
a /=4;
console.log("a=",a,"b=",b);
console.log("a=",a)

// 3:comparision  operator

let a =5;
let b= 2;
console.log("5==2",a==b);
console.log("5!=2",a!=b)
console.log("5<=2",a<=b)
console.log("5>=2",a>=b)
console.log("5===2",a===b)
console.log("5!==2",a!==b)
console.log("5<2",a<b)
console.log("5>2",a>b)

// 4:logical  operator

let a =5;
let b= 2;
let cond1= a>b;
let cond2= a===5;
console.log(cond1&&cond2)
console.log(cond1||cond2)
console.log(!cond1)
console.log(!cond2)