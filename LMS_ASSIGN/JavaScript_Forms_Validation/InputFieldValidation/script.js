const ageInput = document.getElementById("age");
const checkAge = document.getElementById("checkAge");

checkAge.addEventListener("click", () => {
  const age = Number(ageInput.value);
  if (age >= 16 && age <= 60) {
    console.log("Valid Age");
  } else {
    console.log("Invalid Age");
  }
});



const scoreForm = document.getElementById("scoreForm");
const checkForm = document.getElementById("checkForm");
checkForm.addEventListener("click", () => {
  const result = scoreForm.checkValidity();
  console.log("Form Validity:", result);
  scoreForm.reportValidity();
});

const registrationCode = document.getElementById("registrationCode");

registrationCode.addEventListener("input", () => {
  if (registrationCode.value.length < 4) {
    registrationCode.setCustomValidity(
      "Registration code must contain at least 4 characters",
    );
  } else {
    registrationCode.setCustomValidity("");
  }

  console.log("Registration Code Valid:", registrationCode.checkValidity());
});
