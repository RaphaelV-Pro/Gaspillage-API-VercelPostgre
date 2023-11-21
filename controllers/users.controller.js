const postgre = require('../database')
const usersController = {
    getAll: async(req, res) => {
        try {
            const { rows } = await postgre.query("SELECT * FROM user")
            res.json({msg: "OK", data: rows})
        } catch (error) {
            res.json({msg: error.msg})
        }
    }
}

module.exports = usersController;