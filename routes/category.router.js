const express = require("express")
const router = express.Router()

const categoryController = require('../controllers/category.controller')

router.get("/", categoryController.getAll)
/*
router.get("/:id", bookController.getById)
router.post("/", bookController.create)
router.put("/:id", bookController.updateById)
router.delete("/:id", bookController.deleteById)
*/

module.exports = router;