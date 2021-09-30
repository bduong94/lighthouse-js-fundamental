const smartGarbage = function (trash, bins){ //Nameless function assigned to the variable smartGarbage

  /*
  Parameters:
  trash - a string that indicates what type of item is submitted
  bins - an object with the properties waste, recyling and compost

  Returns:
  An updated object after processing what the trash string is
  */

  bins[trash] += 1; //Adds one to the object value

  return bins; //Returns object

}

// Test Case

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));