const studentForm = document.getElementById("studentForm");
studentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const course = document.getElementById("course").value;

  console.log("Student Registration Form");
  console.log("Name : ", name);
  console.log("Email : ", email);
  console.log("Course : ", course);
});

const courseEnquiryForm = document.getElementById("courseEnquiryForm");
courseEnquiryForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(courseEnquiryForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const course = formData.get("course");

  console.log("Course Enquiry Details");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Course:", course);

  console.log("All FormData Entries:");

  for (const [key, value] of formData.entries()) {
    console.log(key, ":", value);
  }
});
