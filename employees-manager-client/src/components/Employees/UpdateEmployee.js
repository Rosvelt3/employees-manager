import React from 'react';
import { Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';

const UpdateEmployees = () => {
  const { id } = useParams();

  return (
    <div className="UpdateEmployees">
      <Button color="primary" variant="contained">{id}</Button>
    </div>
  )
}

export default UpdateEmployees;
