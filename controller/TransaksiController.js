const { Transaksi, User, Product, sequelize } = require('../models')

module.exports= {
    getAllTransaksi: async (req, res) => {
        try {
            const transaksi = await Transaksi.findAll(
                {
                    include: [{attributes: ["firstName"], model: User}, {attributes: ["name"], model: Product}]
                }
            )
            res.status(200).json({
                message: 'Success',
                transaksi
            })
        } catch (error) {
            throw error
        }
    },
    getTransaksiById: async (req, res) => {
        try {
            const id = req.params.id
            const transaksi = await Transaksi.findOne({
                where: { id },
                include: [{attributes: ["firstName"], model: User}, {attributes: ["name"], model: Product}]
            })
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
    },

    getQty: async (req, res) => {
        try {
            const tes = await Transaksi.findAll({
                group: ['monthly'],
                attributes: [["MONTH(createdAt)", "monthly"], ['SUM(qty)', 'qty']],
                transaksi: [
                    ['monthly', 'DESC']
                ]
            })
            res.status(200).json({
                message: 'Success',
                tes
            })
        } catch (error) {
            throw error
        }
    },

    filterByMonth: async (req, res) => {
        try {
            const { month } = req.body
            let filter;
            if(month) {
              filter = await sequelize.query(`SELECT SUM(Transaksis.qty) AS Qty, Transaksis.total, MONTH(Transaksis.createdAt) AS bulan, Users.firstName AS username, Products.name AS productName
              FROM Transaksis
              JOIN Users ON Transaksis.userId = Users.id
              JOIN Products ON Transaksis.productId = Products.id
              WHERE MONTH(Transaksis.createdAt) = ${month}
              GROUP BY MONTH(Transaksis.createdAt), Transaksis.productId`)
            } else {
              filter = await sequelize.query('SELECT SUM(Transaksis.qty) AS Qty, Transaksis.total, MONTH(Transaksis.createdAt) AS bulan, Users.firstName AS username, Products.name AS productName FROM Transaksis JOIN Users ON Transaksis.userId = Users.id JOIN Products ON Transaksis.productId = Products.id GROUP BY MONTH(Transaksis.createdAt), Transaksis.productId')
            }
            
            res.status(200).json({
                message: 'TESTING',
                filter
            })
        } catch (error) {
            throw error
        }
    }
}