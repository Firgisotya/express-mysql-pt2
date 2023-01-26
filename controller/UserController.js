const { User } = require('../models')

const getUser = async (req, res) => {
    try {
        const user = await User.findAll()
        res.status(200).json({
            message: 'Success',
        })
    } catch (error) {
        throw error
    }
}
module.exports = {
    getUser,
}