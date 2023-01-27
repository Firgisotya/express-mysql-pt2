'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [
      {
      name: 'Iphone 12 Pro Max',
      brandId: 1,
      categoryId: 1,
      price: 5000,
      image: 'images.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Iphone 11 Pro Max',
      brandId: 1,
      categoryId: 1,
      price: 5000,
      image: 'images.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Iphone 13 Pro Max',
      brandId: 1,
      categoryId: 1,
      price: 5000,
      image: 'images.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Iphone 14 Pro Max',
      brandId: 1,
      categoryId: 1,
      price: 5000,
      image: 'images.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'MAcbook Air M1',
      brandId: 1,
      categoryId: 2,
      price: 5000,
      image: 'images.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'MAcbook Pro M1',
      brandId: 1,
      categoryId: 2,
      price: 5000,
      image: 'images.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'MAcbook Air M2',
      brandId: 1,
      categoryId: 2,
      price: 5000,
      image: 'images.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'MAcbook Pro M2',
      brandId: 1,
      categoryId: 2,
      price: 5000,
      image: 'images.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
