const repeatNumbers = function (data) { //Nameless function assigned to the variable repeatNumbers

  /*
  Parameter

  data - Array of arrays of integers

  Return
  First index integer repeated based on second index integer, if there are more than 1 arrays, seperate by comma
  */

  let result = [] //Empty array
  let repeater = 0; //Repeats numbers for loop

  for(let i = 0; i < data.length; i++){ //Iterates over length of data array

    if(i > 0){
      repeater = 0; //Repeater reset for new loop

      result.push(',', ' '); // Seperates current result with a comma

      while (repeater < data[i][1]) {

        result.push(data[i][0]); //Adds number based on integer

        repeater++; //Adds to counter

      }
    } else{

      while (repeater < data[i][1]) {

        result.push(data[i][0]); //Adds number based on integer

        repeater++; //Adds to counter

      }

    }

  }

  result = result.join(''); //Joins array into text

  return result;

}


//Test Cases

console.log(repeatNumbers([[1, 10]])); //1111111111
console.log(repeatNumbers([[1, 2], [2, 3]])); //11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]])); //10101010, 343434343434, 9292