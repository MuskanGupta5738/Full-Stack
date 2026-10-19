const ar = ["Muskan","Priya","Prince","Khushi","Dhruv"];
const list = document.createElement("ol");
ar.forEach((item) =>{
    const l = document.createElement("li");
    l.textContent = item;
    list.appendChild(l);

});
document.getElementById("mylist").appendChild(list);