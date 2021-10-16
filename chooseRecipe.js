const chooseRecipe = function (bakeryA, bakeryB, recipes){ //Nameless function assigned to the variable 

  /*
  Parameters:
  bakeryA - Array of ingredients
  bakeryB - Array of ingredients
  recipes - Array of objects with the name property (string) and ingredient property (array)
  Returns


  */


  for (let i = 0; i < recipes.length; i++){ //Iterate over length of recipes

    if (bakeryA.includes(recipes[i].ingredients[0]) && bakeryB.includes(recipes[i].ingredients[1])) { //Searches if first index is in bakery A and if second index is in bakery B

      return recipes[i].name; //Returns recipe name if True

    }

    if (bakeryA.includes(recipes[i].ingredients[1]) && bakeryB.includes(recipes[i].ingredients[0])) { //Searches if first index is in bakery B and if second index is in bakery A

      return recipes[i].name; //Returns recipe name if True

    }

  }

  return "No recipes can be made"; //If ingredients cannot be used for a recipe

}

//Test Cases

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));