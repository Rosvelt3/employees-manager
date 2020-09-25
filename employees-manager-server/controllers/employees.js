const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Employee = require('../models/Employee');

// @desc    Get all employees
// @route   GET /api/v1/employees
// @access  Public
exports.getEmployees = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc    Get single employee
// @route   GET /api/v1/employees/:id
// @access  Public
exports.getEmployee = asyncHandler(async (req, res, next) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    return next(new ErrorResponse(`Employee not found with id of ${req.params.id}`, 404));
  }

  res.status(200).json({ success: true, data: employee });
});

// @desc    Create employee
// @route   POST /api/v1/employees
// @access  Public
exports.createEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.create(req.body);

  res.status(201).json({
    success: true,
    data: employee
  });
});

// @desc    Update employee
// @route   PUT /api/v1/employees/:id
// @access  Public
exports.updateEmployee = asyncHandler(async (req, res, next) => {
  let employee = await Employee.findById(req.params.id);

  if (!employee) {
    return next(new ErrorResponse(`Employee not found with id of ${req.params.id}`, 404));
  }

  await employee.updateOne(req.body, { runValidators: true });

  res.status(200).json({ success: true, data: employee });
});

// @desc    Delete employee
// @route   DELETE /api/v1/employees/:id
// @access  Public
exports.deleteEmployee = asyncHandler(async (req, res, next) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    return next(new ErrorResponse(`Employee not found with id of ${req.params.id}`, 404));
  }

  employee.remove();

  res.status(200).json({ success: true, data: {} });
});