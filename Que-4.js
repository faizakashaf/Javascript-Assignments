//Assignment 04

function listItem (item){
document.addEventListener('DOMContentLoaded', function(){
let mylist = document.getElementById("fruits");
let NewListitem = document.createElement('li');
NewListitem.textContent= item;
mylist.appendChild(NewListitem);
})
}
listItem("Lemon");