const path = require("path");
const express = require ("express");
const router = express.Router();

const employeesController = require("../../controllers/employeesController");

router.route("/")
    .get(employeesController.getAllEmployees)
    .post(employeesController.createEmployee)
    .put(employeesController.updateEmployee)
    .delete(employeesController.terminateEmployee)

router.route("/:id")
    .get(employeesController.getSingleEmployee)

module.exports = router;