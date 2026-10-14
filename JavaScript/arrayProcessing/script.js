const ary = ["apple", 2.3, 99, "himachal", "a"];

console.log("With forEach");

ary.forEach((element) => {
    if (typeof element === "number") {
        console.log(element);
    }
});

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
