const howManyHundreds = function(num) { //Assigns nameless function to variable howManyHundreds

  /*
  Accepts 1 integer number

  Returns

  Number rounded down after divided by 100

  */


  return Math.floor(num / 100);

}

// //Test Cases

// console.log(howManyHundreds(1000));
// console.log(howManyHundreds(894));
// console.log(howManyHundreds(520));
// console.log(howManyHundreds(99));
// console.log(howManyHundreds(0));