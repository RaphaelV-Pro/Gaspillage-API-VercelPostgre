const postgre = require('../database')
const categoryController = {
    getAll: async(req, res) => {
        try {
            const { rows } = await postgre.query("SELECT * FROM category")
            res.json({msg: "OK", data: rows})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    getById: async(req, res) => {
        try {
            const { rows } = await postgre.query("SELECT * FROM category WHERE Ctcategory_id = $1", [req.params.id])

            if (rows[0]) {
                return res.json({msg: "OK", data: rows})
            }

            res.status(404).json({msg: "not found"})
        } catch (error) {
            res.json({msg: error.msg})
        }
    }
}

module.exports = categoryController;