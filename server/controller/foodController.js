const Sequelize = require('sequelize');
const Model = require('../../db/models/model');
const axios = require('axios');

module.exports = {
  addFood: (req, res) => {
    Model.Food.create({
      item: req.body.item,
      expiration: req.body.expiration
    })
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(404).send(err)
    })
  },
  getAllFoods: (req, res) => {
     Model.Food.findAll({ order: [['expiration', 'ASC']]})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(404).send(err)
    })
  },
  findExpiration: (req, res) => {
     Model.Food.findAll({ where: {expiration: req.params.expiration}})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(404).send(err)
    })
  },
  findFood: (req, res) => {
     Model.Food.findAll({ where: {item: req.params.item}})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(404).send(err)
    })
  },
  deleteFood: (req, res) => {
     Model.Food.destroy({ where: {id: req.params.id}})
    .then((count, data) => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(404).send(err)
    })
  },
  addRecipe: (req, res) => {
    Model.Recipe.create({
      url: req.body.url,
      label: req.body.label,
      calories: req.body.calories
    })
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(404).send(err)
    })
  },
  getAllRecipes: (req, res) => {
    Model.Recipe.findAll({})
    .then(data => {
      res.status(202).send(data)
    })
    .catch(err => {
      res.status(404).send(err)
    })
  },
  deleteRecipe: (req, res) => {
     Model.Recipe.destroy({ where: {id: req.params.id}})
    .then((count, data) => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(404).send(err)
    })
  },
}