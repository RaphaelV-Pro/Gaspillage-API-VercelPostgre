const postgre = require('../database')
const usersController = {
    getAll: async(req, res) => {
        try {
            const { rows } = await postgre.query("SELECT * FROM users")
            res.json({msg: "OK", data: rows})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    authenticate: async(req, res) => {
        try {
            const { rows } = await postgre.query("SELECT * FROM users WHERE Uslogin = $1 AND Uspassword = $2", [req.params.login, req.params.pwd])

            if (rows[0]) {
                return res.json({msg: "OK"})
            }

            res.status(404).json({msg: "not found"})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    getById: async(req, res) => {
        try {
            const { rows } = await postgre.query("SELECT * FROM users")
            res.json({msg: "OK", data: rows})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    create: async(req, res) => {
        try {
            const { Uslogin, Uspassword, Usfirstname, Uslastname, Usemail, Uscountry, Uscreation_date } = req.body

            const sql = 'INSERT INTO users (Uslogin, Uspassword, Usfirstname, Uslastname, Usemail, Uscountry, Uscreation_date) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *'

            const { rows } = await postgre.query(sql, [Uslogin, Uspassword, Usfirstname, Uslastname, Usemail, Uscountry, Uscreation_date])

            res.json({msg: "OK", data: rows[0]})

        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    updateById: async(req, res) => {
        try {
            const { Uslogin, Uspassword, Usfirstname, Uslastname, Usemail, Uscountry } = req.body

            const sql = 'UPDATE users SET Uslogin = $1, Uspassword = $2, Usfirstname = $3, Uslastname = $4, Usemail = $5, Uscountry = $6 WHERE Ususer_id = $7 RETURNING *'

            const { rows } = await postgre.query(sql, [Uslogin, Uspassword, Usfirstname, Uslastname, Usemail, Uscountry, req.params.id])

            res.json({msg: "OK", data: rows[0]})

        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    deleteById: async(req, res) => {
        try {
            const sql = 'DELETE FROM users WHERE Ususer_id = $1 RETURNING *'

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

module.exports = usersController;