var express = require('express');
var router = express.Router();
var Meal = require('../controler/meal')

/* GET home page. */
router.get('/', function(req, res, next) {
  Meal.list()
    .then(meals=>{
      res.json(meals)
    })
    .catch(erro=>{
      res.status(601).json({ message: "Erro a obter lista de refeições",error:erro })
    })
});

router.get('/date/:date', function(req, res, next) {
  Meal.getMealDate(req.params.date)
    .then(meal=>{
      res.json(meal)
    })
    .catch(erro=>{
      res.status(602).json({ message: "Erro a obter refeição",error:erro })
    })
});

router.get('/:id', function(req, res, next) {
  Meal.getMeal(req.params.id)
    .then(meal=>{
      res.json(meal)
    })
    .catch(erro=>{
      res.status(602).json({ message: "Erro a obter refeição",error:erro })
    })
});

router.post('/', function(req, res, next) {
  Meal.addMeal(req.body)
    .then(Meal=>{
      res.status(201).json(Meal)
    })
    .catch(erro=>{
      res.status(603).json({ message: "Erro a adicionar refeição",error:erro })
    })
});


router.put('/:tipo/:data', function(req, res, next) {
  Meal.editMealDate(req.params.data,req.params.tipo,req.body)
    .then(meal=>{
      res.json(meal)
    })
    .catch(erro=>{
      res.status(604).json({ message: "Erro a atualizar refeição",error:erro })
    })
});

router.delete('/:id', function(req, res, next) {
  Meal.deleteMeal(req.params.id)
    .then(Meal=>{
      res.json(Meal)
    })
    .catch(erro=>{
      res.status(605).json({ message: "Erro a eliminar refeição",error:erro })
    })
});

module.exports = router;
