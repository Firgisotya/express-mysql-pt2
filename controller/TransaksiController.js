const { Transaksi } = require('../models')

module.exports= {
    getAllTransaksi: async (req, res) => {
        try {
            const transaksi = await Transaksi.findAll()
            res.status(200).json({
                message: 'Success',
                transaksi
            })
        } catch (error) {
            throw error
        }
    },
    storeTransaksi: async (req, res) => {
        try {
            const transaksi = await Transaksi.create(req.body)
            res.status(201).json({
                message: 'Success Create Data',
                transaksi
            })
        } catch (error) {
            throw error
        }
    },
    updateTransaksi: async (req, res) => {
        try {
            const id = req.params.id
            const transaksi = await Transaksi.update(req.body, {
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
    destroyTransaksi: async (req, res) => {
        try {
            const id = req.params.id
            const transaksi = await Transaksi.destroy({
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