const multiplicationTable = function(maxValue) { //Nameless function assigned to variable mulitplicationTable

  /*
  Parameter:
  maxValue - Integer value

  Returns
  Table of maxValue by maxValue and showing the mulitplication of each one
  */

  let table = [] //Empty array

  for(let i = 1; i <= maxValue; i++){ //Iterates for maxValue number of time(s)

    for(let j = 1; j <= maxValue; j++){ //Iterates for maxValue number of time(s)

      if (j === 1){

        table[i-1] = i + " "; //Starts off line with the current multiple

      } else if (j !== maxValue){

        table[i-1] = table[i-1] + i*j + " "; //Adds next multiple to the same line and spaces

      } else {

        table[i-1] = table[i-1] + i*j //Adds final multiple without space

      }

    }

  }

  let finalTable = "" //Empty string

  for(let i = 0; i < table.length; i++){ //Iterates over length of table

    if(i !== (table.length-1)){

      finalTable = finalTable + table[i] + "\n"; //Adds new line and skips to next line

    } else {

      finalTable = finalTable + table[i]; //Does not skip the final line

    }

  }

  return finalTable; //Returns final output
}

//Test Cases

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));