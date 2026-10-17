let text = document.querySelector("h1").innerText;
console.log(text + "Muskan Gupta");

function submit(){
    console.log("submit button clicked");

    const nm=document.querySelector("#fullName").value.trim();
    const em=document.getElementById("email").value.trim();
    const ph=document.getElementById("phone").value.trim();
    const dob=document.getElementById("DOB").value.trim();
    const gender=document.getElementById("gender").value.trim();
    console.log("Full Name:",nm);
    console.log("Email:",em);

    }

    function submit2(){
        
    }