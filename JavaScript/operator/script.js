let a = 10;
let b=20;
let c = "10";
let d="20";
console.log(a==b);//false
console.log(a==c);//true
console.log(a===c);//false
console.log(a!=b);//true
console.log(a!==c);//true

let x = 5;
let y = 2;
console.log(x%y)//1

let p = 10;
let q = 3;
console.log(p/q);//3.33

//AND &&
//OR ||
//NOT !

let m = true;
let n = false;
let o = true;
console.log(m&&n);//false
console.log(m&&o);//true
console.log(n&&o);//false
console.log(m||n);//true
console.log(m||o);//true
console.log(n||o);//true

console.log(!m && o);//false
console.log(!n&&o);//true
console.log(!m||n);//false
console.log(!m||o);//true

console.log(a++);//10
console.log(a--);//11
console.log(a);//10

console.log(b--);//20
console.log(b);//19
console.log(b--);//19
console.log(--b);//17

console.log(a>b ? "hello" : "bye");//bye

if(a<b){
    console.log("hello");
}else{
    console.log("bye");
}

//loop
for(var i=0; i<5; i++){
    console.log("we are learning java script for loop",i+1);
}

var i=0
while(i<=5){
    console.log("we are learning java script while loop",i+1);
    i++;
}

var i=0
do{
    console.log("we are learning java script do while loop",i+1);
    i++;
}while(i<=5);