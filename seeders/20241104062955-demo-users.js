'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        username: 'johndoe',
        email: 'johndoe@example.com',
        password: 'password123',
        role: 'Member',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jane Doe',
        username: 'janedoe',
        email: 'janedoe@example.com',
        password: 'password123',
        role: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Admin User',
        username: 'adminuser',
        email: 'admin@example.com',
        password: 'password123',
        role: 'SuperAdmin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alice Smith',
        username: 'alicesmith',
        email: 'alice@example.com',
        password: 'password123',
        role: 'Member',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bob Brown',
        username: 'bobbrown',
        email: 'bob@example.com',
        password: 'password123',
        role: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
