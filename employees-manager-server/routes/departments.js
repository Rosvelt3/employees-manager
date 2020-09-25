const router = require('express').Router();
const advancedResults = require('../middleware/advancedResults');

//Get controllers
const {
  getDepartments,
  getDepartment,
  createDepartment,
  updateDepartment,
  deleteDepartment
} = require('../controllers/departments');

const Department = require('../models/Department');

router.route('/')
  .get(advancedResults(Department), getDepartments)
  .post(createDepartment)

router.route('/:id')
  .get(getDepartment)
  .put(updateDepartment)
  .delete(deleteDepartment)

module.exports = router;