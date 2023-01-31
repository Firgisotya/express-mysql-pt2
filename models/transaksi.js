'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User')
  const Product = sequelize.define('Product')
  const Transaksi = sequelize.define('Transaksi', {
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
  },{});
  Transaksi.belongsTo(User, {foreignKey: 'userId'});
  Transaksi.belongsTo(Product, {foreignKey: 'productId'});
  return Transaksi;
};