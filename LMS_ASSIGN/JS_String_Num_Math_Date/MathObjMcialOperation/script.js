let marks = [85.6, 92, 76.98, 89, 68.3];

console.log("student marks:", marks);
console.log("round:", Math.round(85.6));
console.log("floor:", Math.floor(85.6));
console.log("ceil:", Math.ceil(85.6));
console.log("trunc:", Math.trunc(85.6));
console.log("lowest marks:", Math.min(...marks));
console.log("highest marks:", Math.max(...marks));

let difference = marks[0] - marks[1];
console.log("absolute difference:", Math.abs(difference));

let a = 20;
let b = 5;

console.log("addition:", a + b);
console.log("subtraction:", a - b);
console.log("multiplication:", a * b);
console.log("division:", a / b);
console.log("remainder:", a % b);

console.log("positive number:", Math.sign(10));
console.log("negative number:", Math.sign(-10));
console.log("zero:", Math.sign(0));

/////////////////////

let radius = 7;
let base = 3;
let height = 4;

console.log("value of PI:", Math.PI);

let circumference = 2 * Math.PI * radius;
console.log("circle circumference:", circumference);

let square = Math.pow(radius, 2);
console.log("square of radius:", square);
console.log("square root of 25:", Math.sqrt(25));
console.log("square root of -25:", Math.sqrt(-25));
console.log("cube root of 27:", Math.cbrt(27));

let hypotenouse = Math.hypot(base, height);
console.log("hypotenouse:", hypotenouse);

let power = 5 ** 3;
console.log("raised of power:", power);
console.log("positive sign:", Math.sign(25));
console.log("negative sign:", Math.sign(-25));
console.log("zero sign:", Math.sign(0));

