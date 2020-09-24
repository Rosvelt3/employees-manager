import React, { useEffect, useState } from 'react';
import { Button, Card, Container, FormControl, Grid, makeStyles, MenuItem, TextField } from '@material-ui/core';
import { AccountCircleRounded, Add } from '@material-ui/icons';
import { withEmployee } from '../../hoc/Employees/context';
import { withDepartment } from '../../hoc/Departments/context';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    '& .MuiTextField-root': {
      marginTop: theme.spacing(4),
      width: '40ch',
      textAlign: 'left',
    },
    '& .MuiButton-root': {
      marginTop: theme.spacing(5),
    },
    '& .MuiGrid-item': {
      textAlign: 'center',
    },
  },
  icon: {
    fontSize: 80,
  },
  card: {
    maxWidth: 500,
    padding: theme.spacing(2),
    margin: 'auto'
  },
}));

const AddEmployee = ({ employee, department }) => {
  const [departments, setDepartments] = useState([]);
  const [idNumber, setIdNumber] = useState(0);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const classes = useStyles();

  useEffect(() => {
    const fetchDepartments = async () => {
      const result = await department.getAllDepartments();
      setDepartments(result);
    };

    fetchDepartments();
  }, [department])

  const addEmployee = async () => {
    try {
      const result = await employee.addSingleEmployee(idNumber, name, lastName, phone, selectedDepartment);
      alert(result);
    }
    catch (err) {
      throw err;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee();
  }

  return (
    <Container>
      <form onSubmit={handleSubmit} noValidate autoComplete="off" className={classes.root}>
        <Grid container component={Card} className={classes.card}>
          <Grid item xs={12}>
            <AccountCircleRounded className={classes.icon} color="primary" />
          </Grid>
          <Grid item xs={12}>
            <TextField variant="outlined" label="ID Number" value={idNumber} onChange={(e) => setIdNumber(e.target.value)}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField variant="outlined" label="Name" value={name} onChange={(e) => { setName(e.target.value) }}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField variant="outlined" label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField variant="outlined" label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}></TextField>
          </Grid>
          <Grid item xs={12}>

            <TextField
              select
              variant="outlined"
              label="Department"
              id="department-select"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              {departments.map((department, index) => (
                <MenuItem key={department._id} value={department._id}>{department.name}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" color="primary" variant="contained" startIcon={<Add />}>Add Employee</Button>
          </Grid>
        </Grid>
      </form>
    </Container >
  )
}

export default withEmployee(withDepartment(AddEmployee));
