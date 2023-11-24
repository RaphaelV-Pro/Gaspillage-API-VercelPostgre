const express = require("express")
const router = express.Router()
var connection = require('../tools/connection');


const usersController = require('../controllers/users.controller')

//router.get("/", usersController.getAll)
router.get('/', connection.loginGet, function (req, res, next) {
    usersController.getAll(function (err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});


router.get("/:id", usersController.getById)
router.post("/", usersController.create)
router.put("/:id", usersController.updateById)
router.delete("/:id", usersController.deleteById)


module.exports = router;