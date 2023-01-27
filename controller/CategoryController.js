const { Category } = require('../models')

module.exports= {
    getAllCategory: async (req, res) => {
        try {
            const categories = await Category.findAll()
            res.status(200).json({
                message: 'Success',
                categories
            })
        } catch (error) {
            throw error
        }
    },
    storeCategory: async (req, res) => {
        try {
            const categories = await Category.create(req.body)
            res.status(201).json({
                message: 'Success Create Data',
                categories
            })
        } catch (error) {
            throw error
        }
    },
    updateCategory: async (req, res) => {
        try {
            const id = req.params.id
            const categories = await Category.update(req.body, {
                where: { id },
                returning: true
            })
            res.status(201).json({
                message: 'Success Update Data',
                categories
            })
        } catch (error) {
            throw error
        }
    },
    destroyCategory: async (req, res) => {     
        try {
            const id = req.params.id
            const categories = await Category.destroy({
                where: { id }
            })
            res.status(201).json({
                message: 'Success Delete Data',
            })
        } catch (error) {
            throw error
        }
    }
}