const mongoose = require('mongoose');
const Employee = require('./Employee');

const DepartmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add Department name'],
    maxlength: 60,
    unique: true
  },
  description: {
    type: String,
    required: [true, 'Please add Department description'],
    maxlength: 140
  },
  location: {
    type: String,
    required: [true, 'Please add Department location'],
    maxlength: 100
  },
  phoneExtension: {
    type: Number,
    required: [true, 'Please add Department phone extension'],
    min: 1,
    max: 99999,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

DepartmentSchema.pre('remove', async function (next) {
  await Employee.deleteMany({ department: this._id });
  next();
});

module.exports = mongoose.model('Department', DepartmentSchema);