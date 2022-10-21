const express = require("express")
const router = express.Router()
const empleadosController = require("../controllers/empleados.controllers")
//generate the complete crud method
//post method
router.post("/", empleadosController.create)
//get method
router.get("/", empleadosController.find)
router.get("/:id", empleadosController.findOne)
//UPDATE METHOD
router.put("/:id", empleadosController.update)
//delete method
router.delete("/:id", empleadosController.remove)

module.exports = router