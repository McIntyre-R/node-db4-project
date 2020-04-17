const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req,res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: err})
    })
})


router.get('/:id/shoppinglist', (req,res) => {
    Recipes.getShoppingList(req.params.id)
    .then(recipe => {
        res.status(200).json(recipe)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: err })
    })
})

router.get('/:id/instructions', (req,res) => {
    Recipes.getInstructions(req.params.id)
    .then( steps => {
        res.status(200).json(steps)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: err})
    })
})



module.exports = router