let score = 85;
let courseFee = 125000;
let attendance = 92.504956;
let largeString = 8103928156;

let scoreString = score.toString();
console.log("original score :",score);
console.log("score to strinf :",scoreString);
console.log("data type :",typeof scoreString);

console.log("course fee indian format :",courseFee.toLocaleString("en-IN"));
console.log("currency option :",courseFee.toLocaleString(),{
   currency:"INR"
});

console.log("attendance :",attendance.toFixed(2));
console.log("attendence precision :",attendance.toPrecision(4));
console.log("exponential notation :",largeString.toExponential());



///////////////////////

let intScore = 85;
let decimalScore = 85.75;
let numString = "85";
let notANumber = NaN;
let infiniteValue = Infinity;

console.log("is integer:", Number.isInteger(intScore));
console.log("is decimal integer:", Number.isInteger(decimalScore));
console.log("is string integer:", Number.isInteger(numString));

console.log("is NaN:", Number.isNaN(notANumber));
console.log("is integer NaN:", Number.isNaN(intScore));

console.log("is finite:", Number.isFinite(intScore));
console.log("is infinity finite:", Number.isFinite(infiniteValue));

let regularInteger = 1000;
console.log("is safe integer:",Number.isSafeInteger(regularInteger));
console.log("maximum safe integer:",Number.MAX_SAFE_INTEGER);


let value1 = "85.75";
let value2 = "120px";
let value3 = "hello";

console.log("parseInt :", Number.parseInt(value1));
console.log("parseInt :", Number.parseInt(value2));
console.log("parseInt :", Number.parseInt(value3));

console.log("parseFloat :", Number.parseFloat(value1));
console.log("parseFloat :", Number.parseFloat(value2));
console.log("parseFloat :", Number.parseFloat(value3));

console.log("Original Numeric String:", numString);
console.log("Type of Numeric String:", typeof numString);






































