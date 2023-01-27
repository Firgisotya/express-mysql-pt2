const { Brand } = require('../models')

module.exports= {
    getAllBrand: async (req, res) => {
        try {
            const brands = await Brand.findAll()
            res.status(200).json({
                message: 'Success',
                brands
            })
        } catch (error) {
            throw error
        }
    },
    storeBrand: async (req, res) => {
        try {
            const brands = await Brand.create(req.body)
            res.status(201).json({
                message: 'Success Create Data',
                brands
            })
        } catch (error) {
            throw error
        }
    },
    updateBrand: async (req, res) => {
        try {
            const id = req.params.id
            const brands = await Brand.update(req.body, {
                where: { id },
                returning: true
            })
            res.status(201).json({
                message: 'Success Update Data',
                brands
            })
        } catch (error) {
            throw error
        }
    },
    destroyBrand: async (req, res) => {     
        try {
            const id = req.params.id
            const brands = await Brand.destroy({
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