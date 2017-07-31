const Sequelize = require('sequelize');
const Food = require('../../db/models/model');

module.exports = {
  addFood: (req, res) => {
    Food.create({
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
    Food.findAll({})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(404).send(err)
    })
  },
  findExpiration: (req, res) => {
    Food.findAll({ where: {expiration: req.params.expiration}})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(404).send(err)
    })
  },
  findFood: (req, res) => {
    Food.findAll({ where: {id: req.params.id}})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(404).send(err)
    })
  },
  deleteFood: (req, res) => {
    Food.destroy({ where: {id: req.params.id}})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(404).send(err)
    })
  }
}