function Login(){
    const nm = document.getElementById("username").value.trim();
    const ps = document.getElementById("password").value;
    console.log(undefined,ps);
    
}
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener('submit',(e) =>{
    e.preventDefault();

    const formData = new FormData(loginForm);
    const UN = formData.get("username");
    const PS = formData.get("password");
    console.log(UN,PS);
    
    
    

})


