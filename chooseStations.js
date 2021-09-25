function chooseStations(stations){ //Accepts arrays

  let appropriateStations = []; //Empty array to add approriate station names

  for (const place of stations){ //Loops by the entire array

    if(place[1] >= 20){ //Checks to see if capacity is at least 20 in index 1 of the array and if index 2 is either community centre or a school

      if (place[2] === 'school' || place[2] === 'community centre')
        appropriateStations.push(place[0]); //Adds the school name to the list

    }

  }

  return appropriateStations;

}


// //Case 1:
// const stations = [
//   ['Big Bear Donair', 10, 'restaurant'],
//   ['Bright Lights Elementary', 50, 'school'],
//   ['Moose Mountain Community Centre', 45, 'community centre']
// ];

// console.log(chooseStations(stations));