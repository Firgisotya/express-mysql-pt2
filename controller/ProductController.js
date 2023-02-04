const { Product, Brand, Category, sequelize } = require("../models");

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.findAll({
        include: [
          { attributes: ["name"], model: Brand },
          { attributes: ["name"], model: Category },
        ],
      });
      res.status(200).json({
        message: "Success",
        products,
      });
    } catch (error) {
      throw error;
    }
  },
  getProductById: async (req, res) => {
    try {
      const id = req.params.id;
      const product = await Product.findOne({
        where: { id },
        include: [
          { attributes: ["name"], model: Brand },
          { attributes: ["name"], model: Category },
        ],
      });
      res.status(200).json({
        message: "Success",
        product,
      });
    } catch (error) {
      throw error;
    }
  },
  storeProduct: async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(201).json({
        message: "Success Create Data",
        product,
      });
    } catch (error) {
      throw error;
    }
  },
  updateProduct: async (req, res) => {
    try {
      const id = req.params.id;
      const product = await Product.update(req.body, {
        where: { id },
        returning: true,
      });
      res.status(201).json({
        message: "Success Update Data",
      });
    } catch (error) {
      throw error;
    }
  },
  destroyProduct: async (req, res) => {
    try {
      const id = req.params.id;
      const product = await Product.destroy({
        where: { id },
      });
      res.status(201).json({
        message: "Success Delete Data",
        product,
      });
    } catch (error) {
      throw error;
    }
  },

  countBrand: async (req, res) => {
    try {
      const count = await Product.findAll({
        group: ["brandId"],
        attributes: [ // alias
          [sequelize.fn("COUNT", "brandId"), "count"],
        ],
        include: [{ attributes: ["name"], model: Brand }],
      });
      res.status(200).json({
        message: "Success",
        count,
      });
    } catch (error) {
      throw error;
    }
  },

    countCategory: async (req, res) => {
        try {
            const count = await Product.findAll({
                group: ['categoryId'],
                attributes: [
                    [sequelize.fn('COUNT', 'categoryId'), 'count']
                ],
                include: [{ attributes: ['name'], model: Category }]
            })
            res.status(200).json({
                message: 'Success',
                count
            })
        } catch (error) {
            throw error
        }
    },

    filterBrand: async (req, res) => {
        try {
            const { brandId } = req.body
            let filter;
            if(brandId) {
              filter = await sequelize.query(`SELECT Products.id AS ProductID, Brands.id AS BrandId, Brands.name
              FROM Products
              INNER JOIN Brands
              ON Products.brandId = Brands.id
              WHERE brandId = ${brandId}`)
            } else {
              filter = await sequelize.query('SELECT Products.id AS ProductID, Brands.id AS BrandId, Brands.name FROM Products INNER JOIN Brands ON Products.brandId = Brands.id')
            }
            
            res.status(200).json({
                message: 'TESTING',
                filter
            })
        } catch (error) {
            throw error
        }
    }

};
