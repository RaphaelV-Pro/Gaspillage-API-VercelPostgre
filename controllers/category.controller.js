const postgre = require('../database')
const categoryController = {
    getAll: async(req, res) => {
        try {
            const { rows } = await postgre.query("SELECT * FROM category")
            res.json({msg: "OK", data: rows})
        } catch (error) {
            res.json({msg: error.msg})
        }
    }
}

module.exports = categoryController;