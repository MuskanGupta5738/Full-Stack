const input = document.getElementById("myForm");
input.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(input);
    const ch = formData.get("name");

    let isValid = true;
    for (let i = 0; i < ch.length; i++) {
        if((ch.charAt(i) >= 'A' && ch.charAt(i) <= 'Z') || (ch.charAt(i) >= 'a' && ch.charAt(i) <= 'z') || ch.charAt(i) === ' ')
        {
            isValid = true;
        }else{
            isValid=false;
            break;
        }
    }
    console.log(isValid  ? "valid" : "invalid");

   
    
    

    
});