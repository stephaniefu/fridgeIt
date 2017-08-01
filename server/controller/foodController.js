const Sequelize = require('sequelize');
const Food = require('../../db/models/model');
const axios = require('axios');

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
    Food.findAll({ order: [['expiration', 'ASC']]})
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
    Food.findAll({ where: {item: req.params.item}})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(404).send(err)
    })
  },
  deleteFood: (req, res) => {
    Food.destroy({ where: {id: req.params.id}})
    .then((count, data) => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(404).send(err)
    })
  }
}