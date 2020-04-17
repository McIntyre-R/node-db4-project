
exports.seed = function(knex) {
  return knex('RecipeDetails').truncate()
    .then(function () {
      return knex('Ingredients').truncate()
    })
    .then(function () {
      return knex('Ingredients').insert([
        {Ingredient_Name: 'Cup(s) of Light Brown Sugar'},
        {Ingredient_Name: 'Tablespoon(s) of Dijon Mustard'},
        {Ingredient_Name: 'Boneless Salmon Fillet(s) (6 ounce)'},
        {Ingredient_Name: 'Egg(s)'},
        {Ingredient_Name: 'Cup of Grated Parmesan Cheese'},
        {Ingredient_Name: 'Teaspoon(s) of Cajun Seasoning'},
        {Ingredient_Name: 'Boneless Pork Chop(s), trimmed'}
      ]);
    })
    .then(function () {
      return knex('Recipes').truncate()
    })
    .then(function () {
      return knex('Recipes').insert([
        {Recipe_Name: 'Salmon with Brown Sugar Glaze'},
        {Recipe_Name: 'Parmesan-Crusted Pork Chops'}
      ]);
    })
    .then(function () {
      return knex('Steps').truncate()
    })
    .then(function () {
      return knex('Steps').insert([
        {Step_Number: 1, Step_Instructions: 'Preheat the oven\'s broiler and set the oven rack at about 6 inches from the heat source; prepare the rack of a broiler pan with cooking spray.', Recipe_id: 1},
        {Step_Number: 2, Step_Instructions: 'Season the salmon with salt and pepper and arrange onto the prepared broiler pan. Whisk together the brown sugar and Dijon mustard in a small bowl; spoon mixture evenly onto top of salmon fillets.', Recipe_id: 1},
        {Step_Number: 3, Step_Instructions: 'Cook under the preheated broiler until the fish flakes easily with a fork, 10 to 15 minutes.', Recipe_id: 1},
        {Step_Number: 1, Step_Instructions: 'Preheat oven to 350 degrees F (175 degrees C). Spray a baking dish with cooking spray.', Recipe_id: 2},
        {Step_Number: 2, Step_Instructions: 'Whisk egg in a shallow bowl.', Recipe_id: 2},
        {Step_Number: 3, Step_Instructions: 'Mix Parmesan cheese and Cajun seasoning together on a plate.', Recipe_id: 2},
        {Step_Number: 4, Step_Instructions: 'Dip each pork chop into egg. Press into Parmesan mixture until coated on both sides. Place in the prepared baking dish.', Recipe_id: 2},
        {Step_Number: 5, Step_Instructions: 'Bake in the preheated oven until golden and an instant-read thermometer inserted into the center reads at least 145 degrees F (63 degrees C), 35 to 40 minutes.', Recipe_id: 2}
      ]);
    })
    .then(function () {
      return knex('RecipeDetails').insert([
        {Recipe_ID: 1, Ingredients_id: 1, Quantity: 1.25},
        {Recipe_ID: 1, Ingredients_id: 2, Quantity: 2},
        {Recipe_ID: 1, Ingredients_id: 3, Quantity: 4},
        {Recipe_ID: 2, Ingredients_id: 4, Quantity: 1},
        {Recipe_ID: 2, Ingredients_id: 5, Quantity: .25},
        {Recipe_ID: 2, Ingredients_id: 6, Quantity: 1},
        {Recipe_ID: 2, Ingredients_id: 7, Quantity: 2}
      ]);
    });
};
