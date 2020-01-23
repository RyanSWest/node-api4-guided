const knex = require('knex');

// const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[environment];
const environment = 'development';
module.exports = knex(config);
