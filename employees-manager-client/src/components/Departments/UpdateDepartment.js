import React from 'react';
import { Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';

const UpdateDepartment = () => {
  const { id } = useParams();

  return (
    <div className="UpdateDepartment">
      <Button color="primary" variant="contained">{id}</Button>
    </div>
  )
}

export default UpdateDepartment;
