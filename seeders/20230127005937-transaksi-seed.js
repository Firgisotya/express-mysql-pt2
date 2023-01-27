'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Transaksis', [
      {
      userId: 1,
      productId: 1,
      qty: 20,
      total: 30000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      productId: 1,
      qty: 20,
      total: 30000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      productId: 5,
      qty: 5,
      total: 500000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      productId: 3,
      qty: 3,
      total: 70000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Transkasis', null, {});
  }
};
