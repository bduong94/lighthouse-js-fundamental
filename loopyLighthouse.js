for (let i = 100; i <= 200; i++){ //Start = 100, Ends loop at 200, increments of 1

  if (i % 3 === 0 && i % 4 === 0){ //If multiple of 3 and 4
    
    console.log('LoopyLighthouse')

  } else if (i % 3 === 0){ //If multiple of 3

    console.log('Loopy'); //Prints out Loopy

  } else if(i % 4 === 0){ //If multiple of 4

    console.log('Lighthouse'); //Prints out Lighthouse

  } else{ //If not a multiple of 3 or 4

    console.log(i); 

  }

}