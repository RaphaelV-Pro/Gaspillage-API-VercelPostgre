const express = require("express")
const router = express.Router()

const usersController = require('../controllers/users.controller')

router.get("/", usersController.getAll)
router.get("/:id", usersController.getById)
router.post("/", usersController.create)
router.put("/:id", usersController.updateById)
router.delete("/:id", usersController.deleteById)


module.exports = router;