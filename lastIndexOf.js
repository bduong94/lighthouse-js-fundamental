const lastIndexOf = function (testedArray, testNumber){ //Nameless function assigned to the variable lastIndexOf

  /*

  Parameter:

  testedArray - array of integers
  testNumber - integer

  Returns the highest index of testNumber in testedArray otherwise if not found -1

  */


  let currentIndex = -1; //Sets current index to -1


  //Using a while loop
  let n = 0; //Counter for while loop
  
  while(n < testedArray.length){

    if (testedArray[n] === testNumber){

      currentIndex = n; //Updates if the testNumber is found in the tested array

    }

    n++; //Adds 1 to counter every loop

  }

  // //Using a for loop
  // for (let i = 0; i < testedArray.length; i++){ //Loops over length of testedArray

  //   if (testedArray[i] === testNumber){

  //     currentIndex = i; //Updates if the testNumber is found in the tested array

  //   }

  // }

  return currentIndex; //Returns the current index - if never updated, it will return -1

}

//Test Cases:
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1)); //Expcted output is 3
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2)); //Expected output is 4
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3)); //Expected output is -1
console.log(lastIndexOf([ 5, 5, 5 ], 5)); //Expected output is 2
console.log(lastIndexOf([], 3)); //Expected output is -1