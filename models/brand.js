'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product')
  const Brand = sequelize.define('Brand', {
    name: DataTypes.STRING,
  }, {});
  Brand.hasMany(Product, {foreignKey: 'brandId'});
  return Brand;
};