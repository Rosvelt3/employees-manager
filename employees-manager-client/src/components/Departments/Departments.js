import React, { useEffect, useState } from 'react';
import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles } from '@material-ui/core';
import { withDepartment } from '../../hoc/Departments/context';

import LoadingBar from '../LoadingBar';
import DepartmentsTable from './DepartmentsTable';
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

const Departments = ({ department }) => {
  const [departments, setDepartments] = useState([]);
  const [departmentToDelete, setDepartmentToDelete] = useState("");
  const [loading, setLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const result = await department.getAllDepartments();
        setDepartments(result);
        setLoading(false);
      }
      catch (err) {
        setLoading(false);
        throw err;
      }
    };

    fetchDepartments();
  }, [department])

  const handleDelete = (id) => {
    setDepartmentToDelete(id);
    setShowConfirmationDialog(true);
  }

  const deleteDepartment = async () => {
    setShowConfirmationDialog(false);
    try {
      await department.deleteDepartment(departmentToDelete);
      setDepartments(departments.filter(department => department._id !== departmentToDelete));
      setShowDialog(true);
    }
    catch (err) {
      throw err;
    }
  }

  if (loading) return <LoadingBar></LoadingBar>;

  return (
    <Container className={classes.root}>
      <DepartmentsTable departments={departments} handleDelete={handleDelete} />

      <Dialog className={classes.dialog} open={showDialog}>
        <DialogTitle>Department deleted succesfully</DialogTitle>
        <DialogContent>
          <Check className={classes.dialogIcon} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDialog(false)} color="primary">
            Close
        </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={showConfirmationDialog}>
        <DialogTitle>Delete Department?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure that you want to delete this department? All the assigned employees will be deleted too.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => deleteDepartment()} color="primary">
            Accept
        </Button>
          <Button onClick={() => setShowConfirmationDialog(false)} color="primary">
            Cancel
        </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default withDepartment(Departments);
