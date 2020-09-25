const router = require('express').Router();
const advancedResults = require('../middleware/advancedResults');

//Get controllers
const {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee
} = require('../controllers/employees');

const Employee = require('../models/Employee');

router.route('/')
  //Populate department data on employee field when you get the employee
  .get(advancedResults(Employee, 'department'), getEmployees)
  .post(createEmployee)

router.route('/:id')
  .get(getEmployee)
  .put(updateEmployee)
  .delete(deleteEmployee)

module.exports = router;