function showalert(){
    alert("click me button clicked using html events");
}
document.getElementById("clickButton").addEventListener("click",showalert);
// addEventListener("click",showalert2);    

function showalert(){
    alert("click me button clicked using js events");
}