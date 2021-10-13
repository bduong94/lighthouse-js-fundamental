const merge = function (arr1, arr2) { //Nameless function assigned to the variable merge

  /*
  Parameters:
  arr1 - Array of integers
  arr2 - Array of integers

  Returns
  arr1 and arr2 combined and sorted in order from small to largest numbers
  */

  let newArr = arr1.concat(arr2).sort(); //Concat joins the arrays, sort will sort the new array from smallest to largest

  return newArr;

}

//Test Cases
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ])); //Expected [ 1, 2, 3, 4, 4, 5, 6 ]

console.log(merge([ 4 ], [ 2, 5, 8 ])); //Expected [ 2, 4, 5, 8 ]
console.log(merge([ 1, 2, 6 ], [])); //Expected [ 1, 2, 6 ]