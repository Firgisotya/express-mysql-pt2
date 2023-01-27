'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Brands', [
      {
      name: 'Apple',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Samsung',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Asus',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Lenovo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Oppo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Xiomi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'HP',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'MSI',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Brands', null, {});
  }
};
