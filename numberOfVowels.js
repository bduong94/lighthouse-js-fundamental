const numberOfVowels = function(data) { //Nameless function assigned to variable numberOfBowelss

  /*
  Parameters:

  data - a string

  Returns
  Total number of vowels in the string
  */

  let sum = 0; //Variable to sum

  for(let char of data){ //Iterates over string

    if(char === 'a' || char === 'e' || char === 'i' || char ===  'o' || char ===  'u'){ //Checks to see if character is a vowel

      sum ++;

    }

  }

  return sum; //Returns total sum of vowels

}

//Test Cases

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));