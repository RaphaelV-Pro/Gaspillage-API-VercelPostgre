const express = require("express")
const router = express.Router()
var connection = require('../tools/connection');

const categoryController = require('../controllers/category.controller')

//router.get("/", categoryController.getAll)
router.get('/', function (req, res) {
    connection.loginGet(req, res, function (err) {
        if (err) {
            return res.status(403).send({
                message: "Accès interdit, bloqué au bout de 3 tentatives."
            });
        }
        categoryController.getAll(req, res);
    });
});

//router.get("/:id", categoryController.getById)
router.get('/:id', function (req, res) {
    connection.loginGet(req, res, function (err) {
        if (err) {
            return res.status(403).send({
                message: "Accès interdit, bloqué au bout de 3 tentatives."
            });
        }
        categoryController.getById(req, res);
    });
});

/*
//router.post("/", categoryController.create)
router.post('/', function (req, res) {
    connection.loginGet(req, res, function (err) {
        if (err) {
            return res.status(403).send({
                message: "Accès interdit, bloqué au bout de 3 tentatives."
            });
        }
        categoryController.create(req, res);
    });
});

//router.put("/:id", categoryController.updateById)
router.put('/:id', function (req, res) {
    connection.loginGet(req, res, function (err) {
        if (err) {
            return res.status(403).send({
                message: "Accès interdit, bloqué au bout de 3 tentatives."
            });
        }
        categoryController.updateById(req, res);
    });
});

//router.delete("/:id", categoryController.deleteById)
router.delete('/:id', function (req, res) {
    connection.loginGet(req, res, function (err) {
        if (err) {
            return res.status(403).send({
                message: "Accès interdit, bloqué au bout de 3 tentatives."
            });
        }
        categoryController.deleteById(req, res);
    });
});
*/

module.exports = router;