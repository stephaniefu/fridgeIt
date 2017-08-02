const router = require('express').Router();
const controller = require('../controller/foodController');
//controller

//add new food *
router.post('/foods', controller.addFood);
//get all foods *
router.get('/foods', controller.getAllFoods);
//get all foods expiring by date *
router.get('/foods/:expiration', controller.findExpiration);
//get all food by search
router.get('/foods/item/:item', controller.findFood);
//delete food *
router.delete('/foods/:id', controller.deleteFood);
//add recipe
router.post('/recipes', controller.addRecipe);
//get all recipes
router.get('/recipes', controller.getAllRecipes);
//delete recipe
router.delete('/recipes/:id', controller.deleteRecipe);

module.exports = router;