const Sequelize = require('sequelize');

const db = new Sequelize('postgres://ehyfdmza:WVGG0Zq9MnwRItMVGcbrk4A8iY3-cjwD@babar.elephantsql.com:5432/ehyfdmza');

db.authenticate()
  .then(() => {
    console.log('successfully connected to the DB')
  })
  .catch(rr => {
    console.log('could not connect to the DB')
  })

module.exports = db;