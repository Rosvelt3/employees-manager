const express = require('express');
const app = express();
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
const port = process.env.PORT || 5000;

require('dotenv').config({ path: './config/.env.development.local' })
connectDB();

const departments = require('./routes/departments');
const employees = require('./routes/employees');

app.use(express.json());

app.use('/api/v1/departments', departments);
app.use('/api/v1/employees', employees);
app.use(errorHandler);

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

const server = app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
})

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
})