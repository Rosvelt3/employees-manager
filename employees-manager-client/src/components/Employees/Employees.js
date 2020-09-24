import React, { useEffect, useState } from 'react';
import { Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles } from '@material-ui/core';
import { withEmployee } from '../../hoc/Employees/context'

import LoadingBar from '../LoadingBar';
import EmployeesTable from './EmployeesTable';
import { Check } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30
  },
  dialog: {
    textAlign: 'center',
  },
  dialogIcon: {
    color: theme.palette.success.main,
    fontSize: 80
  }
}));

const Employees = ({ employee }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const result = await employee.getAllEmployees();
        setEmployees(result);
        setLoading(false);
      }
      catch (err) {
        setLoading(false);
        throw err;
      }
    };

    fetchEmployees();
  }, [employee])

  const deleteEmployee = async (id) => {
    try {
      await employee.deleteEmployee(id);
      setEmployees(employees.filter(employee => employee._id !== id));
      setShowDialog(true);
    }
    catch (err) {
      throw err;
    }
  }

  if (loading) return <LoadingBar></LoadingBar>;

  return (
    <Container className={classes.root}>
      <EmployeesTable employees={employees} deleteEmployee={deleteEmployee} />
      <Dialog className={classes.dialog} open={showDialog}>
        <DialogTitle>Employee deleted succesfully</DialogTitle>
        <DialogContent>
          <Check className={classes.dialogIcon} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDialog(false)} color="primary">
            Close
        </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default withEmployee(Employees);
