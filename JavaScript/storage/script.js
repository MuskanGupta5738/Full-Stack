const data = [
  {
    title: "MyPhone 16",
    description: "very good phone is deep beetroot Color",
    button1: "₹25000",
    button2: "buynow",
  },
  {
    title: "Ramsungs Fold 7",
    description: "Feel the Book Style Phone which can fold",
    button1: "₹85000",
    button2: "buynow",
  },
  {
    title: "audiocon 18",
    description: "very good phone is deep beetroot Color",
    button1: "₹25000",
    button2: "buynow",
  },
  {
    title: "Blueyou 17",
    description: "very good phone is deep beetroot Color",
    button1: "₹25000",
    button2: "buynow",
  },
];
const jsonData = {
  title: "MyPhone 17",
  description: "very good phone is deep beetroot Color",
  button1: "₹25000",
  button2: "buynow",
};

const dataReadyToStore = JSON.stringify(jsonData);

localStorage.setItem("myNewData", dataReadyToStore);
localStorage.setItem("myName", "Raj Vardhan");
localStorage.setItem("Your Name", "Prince Patel");

const getLSData = localStorage.getItem("myName");

localStorage.removeItem("Your Name");

