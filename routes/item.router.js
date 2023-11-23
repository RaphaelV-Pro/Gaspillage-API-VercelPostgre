const express = require("express")
const router = express.Router()

const itemController = require('../controllers/item.controller')

router.get("/", itemController.getAll)
router.get("/:id", itemController.getById)
router.post("/", itemController.create)
router.put("/:id", itemController.updateById)
router.delete("/:id", itemController.deleteById)


module.exports = router;