const { Product } = require('../models')

module.exports= {
    getAllProducts: async (req, res) => {
        try {
            const products = await Product.findAll()
            res.status(200).json({
                message: 'Success',
                products
            })
        } catch (error) {
            throw error
        }
    },
    store: async (req, res) => {
        try {
            const product = await Product.create(req.body)
            res.status(201).json({
                message: 'Success Create Data',
                product
            })
        } catch (error) {
            throw error
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id
            const product = await Product.update(req.body, {
                where: { id },
                returning: true
            })
            res.status(201).json({
                message: 'Success Update Data',
            })
        } catch (error) {
            throw error
        }
    },
    destroy: async (req, res) => {     
        try {
            const id = req.params.id
            const product = await Product.destroy({
                where: { id }
            })
            res.status(201).json({
                message: 'Success Delete Data',
                product
            })
        } catch (error) {
            throw error
        }
    }
}