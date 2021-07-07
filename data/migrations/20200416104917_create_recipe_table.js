
exports.up = function(knex) {
    return knex.schema
      .createTable('Recipes', tbl => {
        tbl.increments();
        tbl.text('Recipe_Name', 128)
          .unique()
          .notNullable();
      })
      .createTable('Ingredients', tbl => {
        tbl.increments();
        tbl.text('Ingredient_Name', 128)
          .unique()
          .notNullable();
      })
      .createTable('RecipeDetails', tbl => {
        tbl.increments();
        tbl.integer('Recipe_ID')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('Recipes')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        tbl.integer('Ingredients_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('Ingredients')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        tbl.float('Quantity')
          .notNullable();
      })
      .createTable('Steps', tbl => {
        tbl.increments();
        tbl.integer('Step_Number')
          .notNullable();
        tbl.text('Step_Instructions', 128)
          .notNullable();
        tbl.integer('Recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('Recipes')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('Steps')
      .dropTableIfExists('RecipeDetails')
      .dropTableIfExists('Ingredients')
      .dropTableIfExists('Recipes');
  };
  