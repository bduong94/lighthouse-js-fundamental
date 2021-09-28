const concat = function(arrayOne, arrayTwo){ //Nameless function assigned to variable concat

  /*
  Parameters:
  arrayOne - An array
  arrayTwo - An array

  Returns elements of arrayOne and arrayTwo in one single array

  */
  
  let combinedArray = []; //New empty array

  // //Solution with for loop
  
  // //Looping over arrayOne
  // for(let i = 0; i < arrayOne.length; i++){

  //   combinedArray.push(arrayOne[i]); //Adds element of arrayOne to end of combinedArray

  // }

  // //Looping over arrayTwo
  // for(let i = 0; i < arrayTwo.length; i++){

  //   combinedArray.push(arrayTwo[i]); //Adds element of arrayTwo to end of combinedArray
  // }

  //Solution with while loop
  let n = 0; //Starting counter for arrayOne while loop

  while(n < arrayOne.length){

    combinedArray.push(arrayOne[n]); //Adds element of arrayOne to end of combinedArray

    n++; //Increases counter by 1 each loop

  }

  n = 0; //Resets counter

  while(n < arrayTwo.length){

    combinedArray.push(arrayTwo[n]); //Adds element of arrayTwo to end of combinedArray

    n++; //Increases counter by 1 each loop

  }


  return combinedArray; //Returns the combined array
}

//Test Cases
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);