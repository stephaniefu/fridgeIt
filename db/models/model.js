const Sequelize = require('sequelize');
const db = require('../index');

const Food = db.define('foods', {
  item: {
    type: Sequelize.STRING
  },
  expiration: {
    type: Sequelize.DATEONLY
  }
}, {
  timestamps: false
})

const Recipe = db.define('recipes', {
  url: {
    type: Sequelize.STRING
  },
  label: {
    type: Sequelize.STRING
  },
  calories: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false
})


Food.sync();
Recipe.sync();

module.exports = {
  Food, 
  Recipe
}