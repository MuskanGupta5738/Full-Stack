function b1on(){
    const b1 = document.getElementById("bulb1");
    // b1.style.backgroundColor = "yellow";

    b1.classList.add("b1");
}

function b1off(){
    const b1 = document.getElementById("bulb1");
    // b1.style.backgroundColor = "white";
    b1.classList.remove("b1");
    
}

function b2on_off(){
    const b2 = document.getElementById("bulb2");
    b2.classList.toggle("b2");
}