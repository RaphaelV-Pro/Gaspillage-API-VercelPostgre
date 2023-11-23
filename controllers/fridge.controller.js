const postgre = require('../database')
const fridgeController = {
    getAll: async(req, res) => {
        try {
            const { rows } = await postgre.query("SELECT * FROM fridge")
            res.json({msg: "OK", data: rows})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    getById: async(req, res) => {
        try {
            const { rows } = await postgre.query("SELECT * FROM fridge WHERE Frfridge_id = $1", [req.params.id])

            if (rows[0]) {
                return res.json({msg: "OK", data: rows})
            }

            res.status(404).json({msg: "not found"})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    create: async(req, res) => {
        try {
            const { Fruser_id, Frname, Frdescription, Frcreation_date } = req.body

            const sql = 'INSERT INTO fridge (Fruser_id, Frname, Frdescription, Frcreation_date) VALUES($1, $2, $3, $4) RETURNING *'

            const { rows } = await postgre.query(sql, [Fruser_id, Frname, Frdescription, Frcreation_date])

            res.json({msg: "OK", data: rows[0]})

        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    updateById: async(req, res) => {
        try {
            const { Frname, Frdescription } = req.body

            const sql = 'UPDATE fridge SET Frname = $1, Frdescription = $2 WHERE Ususer_id = $3 RETURNING *'

            const { rows } = await postgre.query(sql, [Frname, Frdescription, req.params.id])

            res.json({msg: "OK", data: rows[0]})

        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    deleteById: async(req, res) => {
        try {
            const sql = 'DELETE FROM fridge WHERE Frfridge_id = $1 RETURNING *'

            const { rows } = await postgre.query(sql, [req.params.id])

            if (rows[0]) {
                return res.json({msg: "OK", data: rows[0]})
            }

            return res.status(404).json({msg: "not found"})
            

        } catch (error) {
            res.json({msg: error.msg})
        }
    }
}

module.exports = fridgeController;