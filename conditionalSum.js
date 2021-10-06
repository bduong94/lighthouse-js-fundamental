const conditionalSum = function(values, condition){ //Nameless function assigned to the variable conditionalSum

  /*
  Accepts two parameters

  values - Array of numbers
  condition - even or odd strings

  Returns
  Sum of all integers that are even or odd in the array

  */

  let sum = 0; //Variable assigned a value of 0

  for(let nums of values){ //Iterates each index in the array values
    if (condition === 'even'){ //Checks to see if condition is even

      if (nums % 2 === 0){ //nums is even, adds to sum

        sum += nums;

      }
    }

    if (condition === 'odd'){ //Checks to see if condition is odd
      if (nums % 2 !== 0){ //nums is odd, adds to sum

        sum += nums;

      }
    }
  }

  return sum; //Returns total sum

}

//Test Case
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));