const range = function(start, end, step) { //Nameless function assigned to variable range

  /*
  Function that accepts three parameters:
  start - integer parameter
  end - integer parameter
  step - integer parameter


  Result:
  Array of integers that add by the step parameter includes the start parameter and includes the end parameter (if the step includes it)
  */


  const arrayOfNumbers = []; //Assign empty array to variable arrayOfNumbers

  //If start, end or step parameters are undefined, empty array is returned by default

  if(start === undefined || end === undefined || step === undefined){

    return arrayOfNumbers;

  }

  //If start parameter is greater than end parameter, empty array is returned by default

  if(start > end){

    return arrayOfNumbers;

  }

  //If step is 0 or negative, empty array is returned by default

  if(step <= 0){

    return arrayOfNumbers;

  }

  // //While loop that adds integers by steps until the number exceeds the end parameter

  // let currentNumber = start; //defines the first number

  // while(currentNumber <= end){ //Breaks once current number is larger than end (will include end)

  //   arrayOfNumbers.push(currentNumber); //Adds current number to the end of the array for arrayOfNumbers

  //   currentNumber += step; //Adds by the step

  // }

  //For loop that adds integers by steps until the number exceeds the end parameter

  for(let currentNumber = start; currentNumber <= end; currentNumber += step){

    arrayOfNumbers.push(currentNumber); //Adds current number to the end of the array for arrayOfNumbers

  }

  return arrayOfNumbers; //Returns array of numbers

}

// //Test Case 1: start is undefined

// console.log(range());


// //Test Case 2: end is undefined

// console.log(range(3));

// //Test Case 3: step is undefined

// console.log(range(3,5));

// //Test Case 4: start is greater than end

// console.log(range(5,3,1));

// //Test case 5: step is 0

// console.log(range(2,5,0));

// //Test case 6: step is a negative integer

// console.log(range(2,5,-1));

// //Test case 7

// console.log(range(0, 10, 2)); //Expected [0, 2, 4, 6, 8, 10]
// console.log(range(10, 30, 5)); //Expected [10, 15, 20, 25, 30]
// console.log(range(-5, 2, 3)); //Expected [-5, -2, 1]