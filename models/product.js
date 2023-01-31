'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define('Brand')
  const Category = sequelize.define('Category')
  const Transaksi = sequelize.define('Transaksi')
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    brandId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING,
  }, {});
  Product.belongsTo(Brand, {foreignKey: 'brandId'});
  Product.belongsTo(Category, {foreignKey: 'categoryId'});
  Product.hasMany(Transaksi, {foreignKey: 'productId'});
  return Product;
};