// const headingText = document.getElementById("heading").innerText;
// const paraText = document.getElementById("studentMessage").textContent;
// const btnLabel = document.getElementById("courseButton").innerHTML;

// console.log(headingText);
// console.log(paraText);
// console.log(btnLabel);


const headingText = document.getElementById("heading");
const paraText = document.getElementById("studentMessage");
const btnLabel = document.getElementById("courseButton");

console.log(headingText.innerHTML);
console.log(paraText.innerText);
console.log(btnLabel.textContent);

headingText.innerText = "Muskan";
headingText.innerHTML = "Mansi";
headingText.textContent = "Priya";

function updateMyName(){
    const myName = document.getElementById("myName").value.trim();
    paraText.innerText = paraText.innerText + " !! " + myName;
    //  paraText.innerText ="Welcome to your learning portel !! " + myName;
}








// const body = document.querySelector("body");
// console.log(body);

// console.log("innerText");
// console.log(body.innerText);

// console.log("innerHTML");
// console.log(body.innerHTML);

// console.log("textContent");
// console.log(body.textContent);



