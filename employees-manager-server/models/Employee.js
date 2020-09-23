const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add Employee name'],
    maxlength: 50
  },
  lastName: {
    type: String,
    required: [true, 'Please add Employee last name'],
    maxlength: 80
  },
  phone: {
    type: String,
    required: [true, 'Please add Employee phone'],
    unique: true,
    match: [
      /^[0-9]{10}$/,
      'Please add a valid Employee phone number'
    ]
  },
  department: {
    type: mongoose.Schema.ObjectId,
    ref: 'Department'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Employee', EmployeeSchema);