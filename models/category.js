'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product')
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, {});
  Category.hasMany(Product, {foreignKey: 'categoryId'});
  return Category;
};