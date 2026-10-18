const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nm = document.getElementById("newsletterName").value.trim();
    const em = document.getElementById("newsletterEmail").value.trim();
    const message = document.getElementById("newsletterMessage");

    if (nm === "" || em === "") {
      message.innerText = "Please enter your name and email.";
    } else {
      message.innerText = "Thank you for subscribing, " + nm + "!";
      newsletterForm.reset();
    }
  });
  console.log(newsletterForm);
}
