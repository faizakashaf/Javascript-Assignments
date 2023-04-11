//Assignmet 06

let mylist = []; 
function  specie(){
  let plant = {    // here plant is a object
    name : "Canctus",
    stem : "thick" , 
    istranspiration : true ,
    generas : 20
  }
  mylist.push(plant);
  console.log(mylist);
  let  stringify = JSON.stringify(mylist); // JSON  convrets this into strings
  localStorage.setItem("keys", stringify);
}