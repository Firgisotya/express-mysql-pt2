'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [
      {
      name: 'Iphone 12 Pro Max',
      brand: 'Apple',
      category: 'Smartphone',
      price: 5000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Iphone 11 Pro Max',
      brand: 'Apple',
      category: 'Smartphone',
      price: 5000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Iphone 13 Pro Max',
      brand: 'Apple',
      category: 'Smartphone',
      price: 5000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Iphone 14 Pro Max',
      brand: 'Apple',
      category: 'Smartphone',
      price: 5000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'MAcbook Air M1',
      brand: 'Apple',
      category: 'Laptop',
      price: 5000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'MAcbook Pro M1',
      brand: 'Apple',
      category: 'Laptop',
      price: 5000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'MAcbook Air M2',
      brand: 'Apple',
      category: 'Laptop',
      price: 5000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'MAcbook Pro M2',
      brand: 'Apple',
      category: 'Laptop',
      price: 5000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
