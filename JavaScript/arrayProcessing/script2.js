const students=["Muskan","Priya","mansi","Gupta"]
console.log(students.includes("saloni"));

if(students.includes("muskan")){
    console.log("eat something");
}else{
    console.log("study something");   
}

const numbers = [2,5,8,11,14];
const filtereNumber = numbers.filter((number) => number>5);
const doubleNumber = filtereNumber.map((number) => number*2);
console.log(doubleNumber);


const arrayMethodChaning = numbers
.filter((number) => number<=5)
.map((number) => number*2);
console.log(arrayMethodChaning);


const data = [2,5,8,11,14,7,1,3,9,12,17,15];
let sum = 0;
sum = data.reduce((sum,item) => (sum = sum+item));
console.log(sum);


