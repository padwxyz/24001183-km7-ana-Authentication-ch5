'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cars', [
      {
        model: 'Toyota Camry',
        type: 'Sedan',
        year: 2020,
        price: 30000000,
        imageUrl: 'http://example.com/car1.jpg',
        createdBy: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Honda Civic',
        type: 'Sedan',
        year: 2019,
        price: 25000000,
        imageUrl: 'http://example.com/car2.jpg',
        createdBy: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'BMW X5',
        type: 'SUV',
        year: 2021,
        price: 75000000,
        imageUrl: 'http://example.com/car3.jpg',
        createdBy: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Mercedes Benz C-Class',
        type: 'Sedan',
        year: 2020,
        price: 90000000,
        imageUrl: 'http://example.com/car4.jpg',
        createdBy: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Toyota Corolla',
        type: 'Sedan',
        year: 2018,
        price: 20000000,
        imageUrl: 'http://example.com/car5.jpg',
        createdBy: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cars', null, {});
  }
};
