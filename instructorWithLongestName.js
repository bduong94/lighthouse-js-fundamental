const instructorWithLongestName = function(instructors) { //Nameless function assigned to variable instructorWithLongestName

  /*
  Parameters:
  instructors - An array of objects with the properties name and course

  Returns
  The object with the longest length key for the property name
  */

  let longestName = '' //Empty string to be iterated over
  let info = '' //Empty string to be iterated over

  for(let person of instructors) { //Iterates over each index of array instructors

    if (person.name.length > longestName.length) {

      longestName = person.name;
      info = person;
    }

  }

  return info; 

}

//Test Cases

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));