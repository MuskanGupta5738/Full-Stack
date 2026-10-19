const ar = ["Muskan","Priya","Prince","Khushi","Dhruv","Rachit"];
const List = document.createElement("ol");
ar.forEach((item) =>{
    const l = document.createElement("li");
    l.textContent = item;
    List.appendChild(l);

});
document.getElementById("myList").appendChild(List);



