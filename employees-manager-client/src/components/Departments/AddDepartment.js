import React, { useState } from 'react';
import { Button, Card, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, makeStyles, TextField } from '@material-ui/core';
import { Add, Check, SupervisedUserCircle } from '@material-ui/icons';
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
  }
}));

const AddDepartment = ({ department }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [phoneExtension, setPhoneExtension] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const classes = useStyles();

  const addDepartment = async () => {
    setLoading(true);
    try {
      await department.addSingleDepartment(name, description, location, phoneExtension);
      setLoading(false);
      //If everything is right empty the fields
      emptyFields();
      setShowDialog(true);
    }
    catch (err) {
      setLoading(false);
      throw err;
    }
  }

  const emptyFields = () => {
    setName("");
    setDescription("");
    setLocation("");
    setPhoneExtension("");
  }

  const validate = () => {
    const tempValidationErrors = {};

    //Validation checks for empty fields and bad formatting
    if (!name.trim()) tempValidationErrors.name = "Fill this field";

    if (!description.trim()) tempValidationErrors.description = "Fill this field";

    if (!location.trim()) tempValidationErrors.location = "Fill this field";

    if (phoneExtension.trim()) {
      if (phoneExtension.match(/^[0-9]{1,5}$/) === null) tempValidationErrors.phoneExtension = "Phone extension must be 1 to 5 digits long";
    } else tempValidationErrors.phoneExtension = "Fill this field";

    setValidationErrors(tempValidationErrors);

    //If there are validation errors return false
    return Object.keys(tempValidationErrors).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addDepartment();
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit} noValidate autoComplete="off" className={classes.root}>
        <Grid container component={Card} className={classes.card}>
          <Grid item xs={12}>
            <SupervisedUserCircle className={classes.formIcon} color="primary" />
          </Grid>
          <Grid item xs={12}>
            <TextField error={validationErrors.name ? true : false} helperText={validationErrors.name} variant="outlined" label="Name" value={name} onChange={(e) => { setName(e.target.value) }}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField error={validationErrors.description ? true : false} helperText={validationErrors.description} multiline rows={4} variant="outlined" label="Description" value={description} onChange={(e) => setDescription(e.target.value)}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField error={validationErrors.location ? true : false} helperText={validationErrors.location} variant="outlined" label="Location" value={location} onChange={(e) => setLocation(e.target.value)}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField error={validationErrors.phoneExtension ? true : false} helperText={validationErrors.phoneExtension} variant="outlined" label="Phone Extension" value={phoneExtension} onChange={(e) => setPhoneExtension(e.target.value)}></TextField>
          </Grid>
          <Grid item xs={12}>
            {
              //If Loading show circular progress instead of button
              loading ?
                <CircularProgress color="primary" />
                :
                <Button type="submit" color="primary" variant="contained" startIcon={<Add />}>Add Department</Button>
            }
          </Grid>
        </Grid>
      </form>

      {
        /*Success Dialog*/
      }
      <Dialog className={classes.dialog} open={showDialog}>
        <DialogTitle>Department added succesfully</DialogTitle>
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

export default withDepartment(AddDepartment);
