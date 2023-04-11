//Assignment 02

listOfNumbers = [4,7,6,5,3,2,8,77,6,11]
function SearchedArray (arr, value , index = 0) {
if (arr.length === index){
    return false;
}
else if(value === arr[index]) {
    return true;
}
else{
    return SearchedArray(arr, value , index+=1);
}
}
let SpecificValue =+prompt("Enter any number to check if it is present in the array or not") ;
if (SearchedArray(listOfNumbers , SpecificValue)) {
    console.log(`${SpecificValue} is present in the list.`);
  } else {
    console.log(`${SpecificValue} is not present in the list.`);
  }
