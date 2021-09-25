const finalPosition = function(moves) { //Assigning finalPosition variable with nameless function

  /*
  Assumes we start at 0,0
  Accepts an array of strings with the strings - 'north', 'south', 'west' or 'east
  */

  let x = 0; //Vertical axis position
  let y = 0; //Horizontal axis position

  for (const move of moves){ //Loops through entire array of instructions

    if(move === "east"){ //Adds if east

      x += 1; 

    }

    if(move === "west"){ //Subtracts if west

      x -= 1; 

    }

    if(move === "north"){ //Adds if north

      y += 1; 

    }

    if(move === "south"){ //Subtracts if south

      y -= 1; 

    }

  }

  return [x,y]; //Returns final position as array

}


// // Case 1

// const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

// console.log(finalPosition(moves));
