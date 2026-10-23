function showalert() {
  alert("click me button clicked using html events");
}
document.getElementById("clickButton").addEventListener("click", showalert2);
// addEventListener("click",showalert2);

function showalert2() {
  alert("click me button clicked using js events");
}

document.getElementById("box").addEventListener("click", () => {
  document.getElementById("box").innerText = "the box was clicked";
});

document.getElementById("mouse").addEventListener("mouseover", () => {
  document.getElementById("mouse").innerText = "Pointer is over the paragraph";
});

document.getElementById("mouseDown").addEventListener("mousedown", () => {
  document.getElementById("mouseDown").innerText = "Mouse button pressed!";
});

document.getElementById("mouseUp").addEventListener("mouseup", () => {
  document.getElementById("mouseUp").innerText = "Mouse button released!";
});

document.getElementById("dbClick").addEventListener("dblclick", () => {
  document.getElementById("dbClick").innerText =
    "You double-clicked this paragraph!";
});

document.getElementById("mousemove").addEventListener("mousemove", () => {
  document.getElementById("mousemove").innerText =
    "Mouse pointer is moving over this text!";
});

document.getElementById("box2").addEventListener("mouseenter", () => {
  document.getElementById("box2").innerText = "The mouse Entered to Box";
});
document.getElementById("box2").addEventListener("mouseout", () => {
  document.getElementById("box2").innerText = "The mouse Exit From Box";
});
 
document.getElementById("nameSubmit").addEventListener("click", () => {
  console.log(document.getElementById("fullName").value.trim());
});

document.getElementById("fullName").addEventListener("keydown", (e) => {
  e.key === "Enter" &&
    console.log(document.getElementById("fullName").value.trim());
});

document.getElementById("LoginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Login Done");
});