const db = require('../data/db-config')

module.exports = {
   getRecipes,
   getShoppingList,
   getInstructions
}

function getRecipes() {
    return db('recipes');
}


function getShoppingList(recipe_id) {
    return db('recipes')
    .select('Ingredient_Name', 'Quantity')
    .from('RecipeDetails')
    .where('Recipe_ID', recipe_id)
    .join('Ingredients', 'RecipeDetails.Ingredients_id', 'Ingredients.id')
}

function getInstructions(recipe_id) {
    return db('steps')
    .where('Recipe_id', recipe_id)
    .orderBy('Step_Number')
}
