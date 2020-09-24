const router = require('express').Router();
const advancedResults = require('../middleware/advancedResults');

const {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee
} = require('../controllers/employees');

const Employee = require('../models/Employee');

router.route('/')
  .get(advancedResults(Employee, 'department'), getEmployees)
  .post(createEmployee)

router.route('/:id')
  .get(getEmployee)
  .put(updateEmployee)
  .delete(deleteEmployee)

module.exports = router;