const whereCanIPark = function(spots, vehicle) { //Nameless function assigned to the variable whereCanIPark

  /*
  Parameters:
  spots - An array with arrays of letters (parking spots)
  vehicle - The vehicle type entering (regular, small or motorcycles)

  Parking spots: 
  Lowercase means unavailable
  Uppercase means available

  Regular cars can only park in R spots
  Small cars can park in R or S spots
  Motorcycles can park in R, S or M spots

  Returns
  Availability of parking spots - Avaliable or unavailable

  */

  for(let y = 0; y < spots.length; y++) { //Iterates over each index of spots
    for(let x = 0; x < spots[y].length; x++) { //Iterates over each index for each index of spots

      if (vehicle === 'regular' && spots[y][x] === 'R') { //If vehicle is regular and the parking spot is R

        return [x, y];

      }

      if (vehicle === 'small' && (spots[y][x] === 'R' || spots[y][x] === 'S')) { //If vehicle is small and the parking spot is R or S

        return [x, y];

      }
      
      if (vehicle === 'motorcycle' && (spots[y][x] === 'R' || spots[y][x] === 'S' || spots[y][x] === 'M')) { //If vehicle is small and the parking spot is R,s S or M

        return [x,y];

      }
    }

  }

  return false //If no spots avaliable

}

// //Test Cases

// console.log(whereCanIPark(
//   [
//     // COLUMNS ARE X
//     // 0    1    2    3    4    5
//     ['s', 's', 's', 'S', 'r', 'M'], // 0 ROWS ARE Y
//     ['s', 'M', 's', 'S', 'r', 'M'], // 1
//     ['s', 'M', 's', 'S', 'r', 'm'], // 2
//     ['S', 'r', 's', 'm', 'R', 'M'], // 3
//     ['S', 'r', 's', 'm', 'r', 'M'], // 4
//     ['S', 'r', 'S', 'M', 'M', 'S']  // 5
//   ],
//   'regular'
// ));

// console.log(whereCanIPark(
//   [
//     ['M', 'M', 'M', 'M'],
//     ['M', 's', 'M', 'M'],
//     ['M', 'M', 'M', 'M'],
//     ['M', 'M', 'r', 'M']
//   ],
//   'small'
// ));

// console.log(whereCanIPark(
//   [
//     ['s', 's', 's', 's', 's', 's'],
//     ['s', 'm', 's', 'S', 'r', 's'],
//     ['s', 'm', 's', 'S', 'r', 's'],
//     ['S', 'r', 's', 'm', 'r', 's'],
//     ['S', 'r', 's', 'm', 'R', 's'],
//     ['S', 'r', 'S', 'M', 'm', 'S']
//   ],
//   'motorcycle'
// ))

