const sumLargestNumbers = function(data) { //Nameless function assigned to the variable sumLargestNumbers

  /*
  Accepts one parameter

  data - An array of numbers

  Returns

  Sum of the two largest numbers

  */

  let largestNum = 0; // Defining integer variable
  let secondLargestNum = 0; // Defining integer variable

  for(let num of data){ //Iterates for each index of the array data

    if(num > largestNum){ //Compares highest number if this is the highest number

      secondLargestNum = largestNum; //Reassigns largestNum to secondLargestNum

      largestNum = num; //Assigns new largestNum to secondLargestNum


    } else if (num > secondLargestNum) { //Checks to see current number is highest than the second largest if it is not larger than the first

      secondLargestNum = num; //Reassigns num to secondLargestNum

    }

  }

  return largestNum + secondLargestNum; //Sums up two highest numbers

}

//Test Cases
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));