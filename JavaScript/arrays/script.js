const arr1 = [1,2,3,4,5];
let arr2 = [1,2,3,4,5];
console.log(arr1);
console.log(arr2);

arr1[0] = 20;
arr2 = [1,2,3,4,5,6,7];

console.log(arr1);
console.log(arr2);


arr1[3] = 30;
arr2 = 10

console.log(arr1);
console.log(arr2);

const ch1 = ["abcd","defg","hijk"];
console.log(ch1);

const arr = ["apple","2kg","himachal",20,99.1,true];

for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);  
}

console.log(arr[2]);//himanchl
console.log(arr.at(-4));//himanchl

arr.push("delhi");
console.log(arr);

arr.pop("delhi");
console.log(arr);

arr.push();
console.log(arr);

let abc = arr.filter((item) => item != "himachal");
console.log(abc);

arr.splice(3, 1);
console.log(arr);

const Name = "lucky kumar singh rajput";
console.log(Name);

let x = Name.split(" ");
console.log(x);

let y = Name.split("u");
console.log(y);

const arr3 = ["orange","2kg", "nagpur", 20, 99.1, true];
// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i]);  
// }

arr3.forEach((element) => {
    console.log(element);
});








