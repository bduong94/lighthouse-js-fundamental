const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

//While loop that prints out ingredients

console.log('Ingredients printed with a while loop:');

let i = 0;
while(i<ingredients.length){

  console.log(ingredients[i]);
  i++;

}

console.log("\n");

//For loop that prints out ingredients
console.log('Ingredients printed with a for loop:');

for(let j=0; j<ingredients.length; j++){

  console.log(ingredients[j]);

}

console.log("\n");


//While loop that prints out the ingredients backwards:

let back1 = 0;


console.log('Ingredients printed backwards with a while loop:');
while(back1<ingredients.length){

  console.log(ingredients[ingredients.length-(1+back1)]);

  back1++;

}

console.log("\n");

//For loop that prints out the ingredients backwards

console.log('Ingredients printed backwards with a for loop:');
for(let j = 0; j<ingredients.length; j++){

  console.log(ingredients[ingredients.length-(1+j)]);

}

