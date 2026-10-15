const ary = ["apple", 2.3, 99, "himachal", "a"];

console.log("With forEach");
ary.forEach((element) => {
    if (typeof element === "number") {
        console.log(element);
    }
});
console.log("X =", x);


console.log("With map");
var x = ary.map((element) => {
    if (typeof element === "number") {
        return element;
    }
});
console.log("X =", x);


const ar2 = ["apple", 2.3, 99, "himachal", "a"];

var F = ar2.filter((item) => item === 99);
console.log("F =", F);

console.log(ar2.find((item) => item === "apple"));


var Fi = ar2.find((item) => item === 99);
console.log("Fi =", Fi);

var Fix = ar2.findIndex((item) => item === 99);
console.log("Fix =", Fix);

const ar3 = [2,5,1,6,7,3,9,4,8];
var s = ar3.sort((a,b) => b-a);
console.log("S =",s);
