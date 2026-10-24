const showAssBtn = document.getElementById("showAssignmentNotification");
const showAttBtn = document.getElementById("showAttendanceNotification");
const stopAssBtn = document.getElementById("stopAssignmentNotification");

const assPara = document.getElementById("AssignmentNotification");
const attPara = document.getElementById("AttendanceNotification");

function showAssignment() {
  assPara.textContent = "your assignment deadline is approaching!";
}

showAssBtn.addEventListener("click", showAssignment);

showAssBtn.addEventListener("click", () => {
  attPara.textContent = "plese check your attandence status!";
});

stopAssBtn.addEventListener("click", () => {
  showAssBtn.removeEventListener("click", showAssignment);

//   showAssBtn.removeEventListener("click", () => {
//     assPara.textContent = "plese check your attandence status!";
//   });
  assPara.textContent = "your assignment deadline is stopped";
});

