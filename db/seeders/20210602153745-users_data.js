'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'Nicholas fortress',
      email: 'email@email.com',
      hashed_password: bcrypt.hashSync('password', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    }])

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
