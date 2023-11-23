const postgre = require('../database')
const itemController = {
    getAll: async(req, res) => {
        try {
            const { rows } = await postgre.query("SELECT * FROM item")
            res.json({msg: "OK", data: rows})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    getById: async(req, res) => {
        try {
            const { rows } = await postgre.query("SELECT * FROM item WHERE Ititem_id = $1", [req.params.id])

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
            const { Itfridge_id, Itname, Itdescription, Itcategory_id, Itscan_date, Itexpiration_date, Itbarcode, Itaudit_user, Itaudit_program, Itaudit_date, Itaudit_time } = req.body

            const sql = 'INSERT INTO item (Itfridge_id, Itname, Itdescription, Itcategory_id, Itscan_date, Itexpiration_date, Itbarcode, Itaudit_user, Itaudit_program, Itaudit_date, Itaudit_time) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *'

            const { rows } = await postgre.query(sql, [Itfridge_id, Itname, Itdescription, Itcategory_id, Itscan_date, Itexpiration_date, Itbarcode, Itaudit_user, Itaudit_program, Itaudit_date, Itaudit_time])

            res.json({msg: "OK", data: rows[0]})

        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    updateById: async(req, res) => {
        try {
            const { Itname, Itdescription, Itcategory_id, Itexpiration_date, Itbarcode, Itaudit_user, Itaudit_program, Itaudit_date, Itaudit_time } = req.body

            const sql = 'UPDATE item SET Itname = $1, Itdescription = $2, Itcategory_id = $3, Itexpiration_date = $4, Itbarcode = $5, Itaudit_user = $6, Itaudit_program = $7, Itaudit_date = $8, Itaudit_time = $9 WHERE Ititem_id = $10 RETURNING *'

            const { rows } = await postgre.query(sql, [Itname, Itdescription, Itcategory_id, Itexpiration_date, Itbarcode, Itaudit_user, Itaudit_program, Itaudit_date, Itaudit_time, req.params.id])

            res.json({msg: "OK", data: rows[0]})

        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    deleteById: async(req, res) => {
        try {
            const sql = 'DELETE FROM item WHERE Ititem_id = $1 RETURNING *'

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

module.exports = itemController;