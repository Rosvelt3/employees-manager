import React, { useEffect, useState } from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import { Person, Group, Business } from '@material-ui/icons';
import { withEmployee } from '../../hoc/Employees/context';
import { withDepartment } from '../../hoc/Departments/context';

import InfoCard from './InfoCard';
import LatestEmployeesTable from './LatestEmployeesTable';
import LatestDepartmentsTable from './LatestDepartmentsTable';
import LoadingBar from '../LoadingBar';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30
  },
  infoCardIcon: {
    fontSize: 50,
  }
}));

const Home = ({ employee, department }) => {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  const lastEmployeeAdded = employees.length !== 0 ? employees[employees.length - 1].name : "None";
  const lastDepartmentAdded = departments.length !== 0 ? departments[departments.length - 1].name : "None";

  useEffect(() => {
    const fetchDepartments = async () => {
      const result = await department.getAllDepartments();
      setDepartments(result);
    };

    const fetchEmployees = async () => {
      const result = await employee.getAllEmployees();
      setEmployees(result);
    };

    const fetchAll = async () => {
      try {
        await fetchDepartments();
        await fetchEmployees();
        setLoading(false);
      }
      catch (err) {
        setLoading(false);
        throw err;
      }
    };

    fetchAll()
  }, [department, employee])

  if (loading) return <LoadingBar></LoadingBar>;

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <InfoCard label="Total Employees" content={employees.length} icon={<Group className={classes.infoCardIcon} color="primary" />} />
        </Grid>
        <Grid item xs={3}>
          <InfoCard label="Total Departments" content={departments.length} icon={<Business className={classes.infoCardIcon} color="primary" />} />
        </Grid>
        <Grid item xs={3}>
          <InfoCard label="Last Employee Added" content={lastEmployeeAdded} icon={<Person className={classes.infoCardIcon} color="primary" />} />
        </Grid>
        <Grid item xs={3}>
          <InfoCard label="Last Department Added" content={lastDepartmentAdded} icon={<Business className={classes.infoCardIcon} color="primary" />} />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <LatestEmployeesTable employees={employees.reverse().slice(0, 4)} />
        </Grid>
        <Grid item xs={12}>
          <LatestDepartmentsTable departments={departments.reverse().slice(0, 4)} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default withEmployee(withDepartment(Home));
