const express = require("express")
const router = express.Router()

const fridgeController = require('../controllers/fridge.controller')

router.get("/", fridgeController.getAll)
router.get("/:id", fridgeController.getById)
router.post("/", fridgeController.create)
router.put("/:id", fridgeController.updateById)
router.delete("/:id", fridgeController.deleteById)


module.exports = router;