const camelCase = function (input) { //Nameless function assigned to the variable camelCase

  /*
  Parameter:
  input - a string


  Returns
  String split of any spaces and combined into one word, any new word will have the first letter capitalized
  */

  let newWord = input.split(' '); //Splits up words in string into an array

  if(newWord.length > 1){ //Only occurs if there is more than one word

    for(let i = 1; i < newWord.length; i++){ //Iterates over length of array newWord
    
      newWord[i] = newWord[i][0].toUpperCase() + newWord[i].slice(1); //First letter will be capitlized and the rest of the word will be added to the uppercase using the slice method

    }

  }

  newWord = newWord.join(''); //Joins entire array to one string

  return newWord //Returns resulting camelCase
}

//Test Case
console.log(camelCase("this is a string")); //thisIsAString
console.log(camelCase("loopy lighthouse")); //loopyLighthouse
console.log(camelCase("supercalifragalisticexpialidocious")); //supercalifragalisticexpialidocious