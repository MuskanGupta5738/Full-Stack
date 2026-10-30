const employees = [
  {
    name: "rahul",
    age: 23,
    gender: "male",
    salary: 30000,
    projects: [{ projectsName: "abcd", timeline: 2, role: "xyz" }],
  },

  {
    name: "manisa",
    age: 24,
    gender: "female",
    salary: 40000,
    projects: [
      { projectsName: "abcd", timeline: 2, role: "xyz" },
      { projectsName: "def", timeline: 4, role: "pqr" },
    ],
  },

  {
    name: "rohit",
    age: 25,
    gender: "male",
    salary: 50000,
    projects: [{ projectsName: "abcd", timeline: 2, role: "xyz" }],
    prosonalDetails: { F_Name: "hhejvb", M_Name: "jeue" },
  },
];

console.log(employees);
employees[1].salary = 45000;
employees[0].projects[0].timeline = 3;
employees[2].prosonalDetails.M_Name = "ebvub";
employees[1].managename = "rohit";
delete employees[1].managename;

const product = [
  { name: "qwer", description: "hi what is the weather of bhopal" },
];
