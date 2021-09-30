const carPassing = function (cars, speed) { //Nameless function assigned to the variable carPassing

  /*
  Parameters:
  cars - An array of of objects
  speed - An integer value

  Returns:
  Another object with the speed input and current time in the array of objects
  */

  const newCar = {}; //Empty object

  newCar['time'] = Date.now(); //Adds time into newCar as a property with the value of the current time
  newCar['speed'] = speed; //Adds speed into the newCar as a property with the value from the parameter

  cars.push(newCar); //Adds newCar at the end of the array

  return cars; //Returns the updated array with the new object created
}

// // Test Case

// const cars = [
//   {
//     time: 1568329654807,
//     speed: 40,
//   },
//   {
//     time: 1568329821632,
//     speed: 42,
//   },
//   {
//     time: 1568331115463,
//     speed: 35
//   }
// ]

// const speed = 38

// console.log(carPassing(cars, speed));