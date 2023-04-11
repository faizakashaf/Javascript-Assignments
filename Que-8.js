//Assignemt 08

let city = {
    name : "Karachi",
    Areas : 100,
    Roads  : 50000,
    MainSea : "Keemari",
}
let str = JSON.stringify(city);  //obj in string
localStorage.setItem("city", str);

let storedData = localStorage.getItem("city");
//parse thev JSON string in original object
let retrieveData =JSON.parse(storedData);

//now access the values usin the keys
console.log(city.Areas);
console.log(city.name);
