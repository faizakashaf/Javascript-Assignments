//Assignment 01

function createAdder(addition) {
    return function (num) {
      return num + addition;
    };
  }
  
  var add5 = createAdder(5);
  var result = add5(10);