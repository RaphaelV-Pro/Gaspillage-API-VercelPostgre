const express = require("express")
const router = express.Router()
var connection = require('../tools/connection');


const usersController = require('../controllers/users.controller')

//router.get("/", usersController.getAll)
router.get('/', function (req, res) {
    connection.loginGet(req, res, function (err) {
        if (err) {
            return res.status(403).send({
                message: "Accès interdit, bloqué au bout de 3 tentatives."
            });
        }
        usersController.getAll(req, res);
    });
});

router.get('/auth/:login/:pwd', function (req, res) {
    connection.loginGet(req, res, function (err) {
        if (err) {
            return res.status(403).send({
                message: "Accès interdit, bloqué au bout de 3 tentatives."
            });
        }
        usersController.authenticate(req, res);
    });
});


//router.get("/:id", usersController.getById)
router.get('/:id', function (req, res) {
    connection.loginGet(req, res, function (err) {
        if (err) {
            return res.status(403).send({
                message: "Accès interdit, bloqué au bout de 3 tentatives."
            });
        }
        usersController.getById(req, res);
    });
});

//router.post("/", usersController.create)
router.post('/', function (req, res) {
    connection.loginGet(req, res, function (err) {
        if (err) {
            return res.status(403).send({
                message: "Accès interdit, bloqué au bout de 3 tentatives."
            });
        }
        usersController.create(req, res);
    });
});

//router.put("/:id", usersController.updateById)
router.put('/:id', function (req, res) {
    connection.loginGet(req, res, function (err) {
        if (err) {
            return res.status(403).send({
                message: "Accès interdit, bloqué au bout de 3 tentatives."
            });
        }
        usersController.updateById(req, res);
    });
});

//router.delete("/:id", usersController.deleteById)
router.delete('/:id', function (req, res) {
    connection.loginGet(req, res, function (err) {
        if (err) {
            return res.status(403).send({
                message: "Accès interdit, bloqué au bout de 3 tentatives."
            });
        }
        usersController.deleteById(req, res);
    });
});

module.exports = router;