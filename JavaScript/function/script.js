function sum(a,b){
    let c = a+b;
    console.log(c);
}
sum(5,10);

function sum_with_d(x,y=10){
    console.log(x+y);
}
sum_with_d(7);//17
sum_with_d(8,20);//28

function calculate(a,b,c){
    return a+b-c;
}
let ans = calculate(5,6,7);
console.log(ans);

const greet = function(){
    console.log("welcome to java script");
}
greet();