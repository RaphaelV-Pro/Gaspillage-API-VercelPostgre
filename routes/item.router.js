const express = require("express")
const router = express.Router()
var connection = require('../tools/connection');


const itemController = require('../controllers/item.controller')

//router.get("/", itemController.getAll)
router.get('/', function (req, res) {
    connection.loginGet(req, res, function (err) {
        if (err) {
            return res.status(403).send({
                message: "Accès interdit, bloqué au bout de 3 tentatives."
            });
        }
        itemController.getAll(req, res);
    });
});

//router.get("/:id", itemController.getById)
router.get('/:id', function (req, res) {
    connection.loginGet(req, res, function (err) {
        if (err) {
            return res.status(403).send({
                message: "Accès interdit, bloqué au bout de 3 tentatives."
            });
        }
        itemController.getById(req, res);
    });
});

//router.post("/", itemController.create)
router.post('/', function (req, res) {
    connection.loginGet(req, res, function (err) {
        if (err) {
            return res.status(403).send({
                message: "Accès interdit, bloqué au bout de 3 tentatives."
            });
        }
        itemController.create(req, res);
    });
});

//router.put("/:id", itemController.updateById)
router.put('/:id', function (req, res) {
    connection.loginGet(req, res, function (err) {
        if (err) {
            return res.status(403).send({
                message: "Accès interdit, bloqué au bout de 3 tentatives."
            });
        }
        itemController.updateById(req, res);
    });
});

//router.delete("/:id", itemController.deleteById)
router.delete('/:id', function (req, res) {
    connection.loginGet(req, res, function (err) {
        if (err) {
            return res.status(403).send({
                message: "Accès interdit, bloqué au bout de 3 tentatives."
            });
        }
        itemController.deleteById(req, res);
    });
});



module.exports = router;