const express = require("express")
const router = express.Router()

const usersController = require('../controllers/users.controller')

router.get("/", usersController.getAll)
/*
router.get("/:id", bookController.getById)
router.post("/", bookController.create)
router.put("/:id", bookController.updateById)
router.delete("/:id", bookController.deleteById)
*/

module.exports = router;