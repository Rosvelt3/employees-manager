import React, { useEffect, useState } from 'react';
import { Button, Card, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, makeStyles, MenuItem, TextField } from '@material-ui/core';
import { AccountCircleRounded, Check, Edit } from '@material-ui/icons';
import { useHistory, useParams } from 'react-router-dom';
import { withEmployee } from '../../hoc/Employees/context';
import { withDepartment } from '../../hoc/Departments/context';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    '& .MuiTextField-root': {
      marginTop: theme.spacing(3),
      width: '40ch',
      textAlign: 'left',
    },
    '& .MuiButton-root': {
      marginTop: theme.spacing(5),
    },
    '& .MuiGrid-item': {
      textAlign: 'center',
    },
    '& .MuiCircularProgress-root': {
      marginTop: theme.spacing(5),
    },
  },
  formIcon: {
    fontSize: 80,
  },
  card: {
    maxWidth: 500,
    padding: theme.spacing(2),
    margin: 'auto'
  },
  dialog: {
    textAlign: 'center',
  },
  dialogIcon: {
    color: theme.palette.success.main,
    fontSize: 80
  },
  dialogIconError: {
    color: theme.palette.error.main,
    fontSize: 80
  }
}));

const UpdateEmployees = ({ employee, department }) => {
  const [departments, setDepartments] = useState([]);
  const [idNumber, setIdNumber] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const result = await employee.getSingleEmployee(id);
        setIdNumber(result.idNumber);
        setName(result.name);
        setLastName(result.lastName);
        setPhone(result.phone);
        setSelectedDepartment(result.department);
      }
      catch (err) {
        history.push("/not-found");
      }
    };

    const fetchDepartments = async () => {
      const result = await department.getAllDepartments();
      setDepartments(result);
    };

    const fetchAll = async () => {
      await fetchDepartments();
      await fetchEmployee();
      setLoading(false);
    }

    fetchAll();
  }, [department, employee, history, id])

  const updateEmployee = async () => {
    setLoading(true);
    try {
      await employee.updateSingleEmployee(id, idNumber, name, lastName, phone, selectedDepartment);
      setLoading(false);
      setShowDialog(true);
    }
    catch (err) {
      setLoading(false);
      throw err;
    }
  }

  const validate = () => {
    const tempValidationErrors = {};

    if (idNumber.trim()) {
      if (idNumber.match(/^[0-9]{11}$/) === null) tempValidationErrors.idNumber = "ID Number must be 11 digits (no hyphens)";
    } else tempValidationErrors.idNumber = "Fill this field";

    if (!name.trim()) tempValidationErrors.name = "Fill this field";

    if (!lastName.trim()) tempValidationErrors.lastName = "Fill this field";

    if (phone.trim()) {
      if (phone.match(/^[0-9]{10}$/) === null) tempValidationErrors.phone = "Phone number must be 10 digits (no hyphens)";
    } else tempValidationErrors.phone = "Fill this field";

    if (!selectedDepartment.trim()) tempValidationErrors.selectedDepartment = "Fill this field";

    setValidationErrors(tempValidationErrors);
    return Object.keys(tempValidationErrors).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      updateEmployee();
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit} noValidate autoComplete="off" className={classes.root}>
        <Grid container component={Card} className={classes.card}>
          <Grid item xs={12}>
            <AccountCircleRounded className={classes.formIcon} color="primary" />
          </Grid>
          <Grid item xs={12}>
            <TextField error={validationErrors.idNumber ? true : false} helperText={validationErrors.idNumber} variant="outlined" label="ID Number" value={idNumber} onChange={(e) => setIdNumber(e.target.value)}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField error={validationErrors.name ? true : false} helperText={validationErrors.name} variant="outlined" label="Name" value={name} onChange={(e) => { setName(e.target.value) }}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField error={validationErrors.lastName ? true : false} helperText={validationErrors.lastName} variant="outlined" label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField error={validationErrors.phone ? true : false} helperText={validationErrors.phone} variant="outlined" label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}></TextField>
          </Grid>
          <Grid item xs={12}>

            <TextField
              select
              error={validationErrors.selectedDepartment ? true : false}
              helperText={validationErrors.selectedDepartment}
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
            {
              loading ?
                <CircularProgress color="primary" />
                :
                <Button type="submit" color="primary" variant="contained" startIcon={<Edit />}>Update Employee</Button>
            }
          </Grid>
        </Grid>
      </form>

      <Dialog className={classes.dialog} open={showDialog}>
        <DialogTitle>Employee updated succesfully</DialogTitle>
        <DialogContent>
          <Check className={classes.dialogIcon} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDialog(false)} color="primary">
            Close
        </Button>
        </DialogActions>
      </Dialog>
    </Container >
  )
}

export default withEmployee(withDepartment(UpdateEmployees));
