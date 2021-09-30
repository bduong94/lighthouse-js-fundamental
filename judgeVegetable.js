const judgeVegetable = function (vegetables, metric){ //Nameless function assigned to the variable  

  /*
  Parameters:
  vegetables - Array of objects;
  metric - a string that will be used to take the value from each object

  Returns:
  The name of the person who has the highest value for the property indicated
  */
  
  let highestValue = 0; //Highest current value to be updated based on string

  let currentName = '' //Empty string to be updated based on highest value

  //Loop over each entry
  for(let i = 0; i < vegetables.length; i++){ //Loops over each entry

    //Compare value based on metric input
    if(vegetables[i][metric] > highestValue) { //For the indexed object, pulls the value fot that metric and compares with highest value

      highestValue = vegetables[i][metric]; //Updates highest value
      currentName = vegetables[i].submitter; //Updates current name

    }

  }

  return currentName; //Returns the person with the highest value for that metric

}

// // Test Case

// const vegetables = [
//   {
//     submitter: 'Old Man Franklin',
//     redness: 10,
//     plumpness: 5
//   },
//   {
//     submitter: 'Sally Tomato-Grower',
//     redness: 2,
//     plumpness: 8
//   },
//   {
//     submitter: 'Hamid Hamidson',
//     redness: 4,
//     plumpness: 3
//   }
// ]

// const metric = 'plumpness'

// console.log(judgeVegetable(vegetables, metric));