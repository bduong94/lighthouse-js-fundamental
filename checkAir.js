const checkAir = function (samples, threshold) { //Nameless function assigned to the variable checkAir

  /*
  Parameters:
  Samples - An array of strings (clean or dirty)
  threshold - Floating integer

  Returns

  Polluted (string) if % of dirty is higher than threshold
  Clean (string) if % of dirty is lower than threshold

  */

  let totalDirty = 0; //Total amount of dirty samples
  let total = 0; //Total amount of samples

  while(total < samples.length){

    if(samples[total] === 'dirty'){

      totalDirty++; //Adds one to amount of dirty samples

    }
    
    total++; //Counts number of totals in samples arrays

  }

  if((totalDirty/total) > threshold){ //Checks to see if number of dirty samples is higher than the threshold

    return 'Polluted';

  }

  return 'Clean';

};


//Test Cases
console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))