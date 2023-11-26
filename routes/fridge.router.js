const express = require("express")
const router = express.Router()
var connection = require('../tools/connection');


const fridgeController = require('../controllers/fridge.controller')

//router.get("/", fridgeController.getAll)
router.get('/', function (req, res) {
    connection.loginGet(req, res, function (err) {
        if (err) {
            return res.status(403).send({
                message: "Accès interdit, bloqué au bout de 3 tentatives."
            });
        }
        fridgeController.getAll(req, res);
    });
});

//router.get("/:id", fridgeController.getById)
router.get('/:id', function (req, res) {
    connection.loginGet(req, res, function (err) {
        if (err) {
            return res.status(403).send({
                message: "Accès interdit, bloqué au bout de 3 tentatives."
            });
        }
        fridgeController.getById(req, res);
    });
});

//router.post("/", fridgeController.create)
router.post('/', function (req, res) {
    connection.loginGet(req, res, function (err) {
        if (err) {
            return res.status(403).send({
                message: "Accès interdit, bloqué au bout de 3 tentatives."
            });
        }
        fridgeController.create(req, res);
    });
});

//router.put("/:id", fridgeController.updateById)
router.put('/:id', function (req, res) {
    connection.loginGet(req, res, function (err) {
        if (err) {
            return res.status(403).send({
                message: "Accès interdit, bloqué au bout de 3 tentatives."
            });
        }
        fridgeController.updateById(req, res);
    });
});

//router.delete("/:id", fridgeController.deleteById)
router.delete('/:id', function (req, res) {
    connection.loginGet(req, res, function (err) {
        if (err) {
            return res.status(403).send({
                message: "Accès interdit, bloqué au bout de 3 tentatives."
            });
        }
        fridgeController.deleteById(req, res);
    });
});

module.exports = router;