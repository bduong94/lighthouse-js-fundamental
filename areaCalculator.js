const calculateRectangleArea = function (length, width){ //Nameless function assigned to variable CalculateRectangleArea


  /*

  Accepts two parameters: 
  Length - Integer value
  Width - Integer value

  Returns
  area = length x width;

  */

  if (length < 0 || width < 0){ //If any value is negative, returns undefined

    return undefined

  }

  let area = length * width;

  return area;

}

const calculateTriangleArea = function (base, height){ //Nameless function assigned to variable CalculateRectangleArea


  /*

  Accepts two parameters: 
  base - Integer value
  height - Integer value

  Returns
  area = base x height / 2;

  */

  if (base < 0 || height < 0){ //If any value is negative, returns undefined

    return undefined

  }

  let area = base * height / 2;

  return area;

}

const calculateCircleArea = function (radius){ //Nameless function assigned to variable CalculateRectangleArea


  /*

  Accepts one parameters: 
  radius - Integer value

  Returns
  area = pi * radius^2;

  */

  if (radius < 0){ //If any value is negative, returns undefined

    return undefined

  }

  let area = Math.pow(radius,2) * Math.PI;

  return area;

}

// //Test cases

// console.log(calculateRectangleArea(10, 5));     // should print 50
// console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
// console.log(calculateRectangleArea(10, -5));    // should print undefined

// console.log(calculateTriangleArea(10, 5)); // should print 25
// console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
// console.log(calculateTriangleArea(10, -5)); // should print undefined

// console.log(calculateCircleArea(10)); // should print 314.159...
// console.log(calculateCircleArea(3.5)); // should print 38.484...
// console.log(calculateCircleArea(-1)); // should print undefined