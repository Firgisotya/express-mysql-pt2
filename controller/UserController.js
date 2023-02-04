const { User } = require('../models')

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll()
            res.status(200).json({
                message: 'Success get all users',
                data: users
            })
        } catch (error) {
            res.status(500).json({
                message: 'Failed get all users',
                data: error
            })
        }
    },
    getUserById: async (req, res) => {
        try {
            const users = await User.findOne({
                where: {
                    id: req.params.id
                }
            })
        } catch (error) {
            res.status(500).json({
                message: 'Failed get users id',
                data: error
            })
        }
    },
    storeUser: async (req, res) => {
        try {
            const users = await User.create(req.body)
            res.status(200).json({
                message: 'Success create users',
                data: users
            })
        } catch (error) {
            res.status(500).json({
                message: 'Failed create users',
                data: error
            })
        }
    },
    updateUser: async (req, res) => {
        try {
            const users = await User.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({
                message: 'Success update users',
                data: users
            })
        } catch (error) {
            res.status(500).json({
                message: 'Failed update users',
                data: error
            })
        }
    },
    destroyUser: async (req, res) => {
        try {
            const users = await User.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({
                message: 'Success delete users',
                data: users
            })
        } catch (error) {
            res.status(500).json({
                message: 'Failed delete users',
                data: error
            })
        }
    }
}