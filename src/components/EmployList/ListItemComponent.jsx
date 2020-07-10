import React, { Fragment, useState, useEffect } from 'react';
import { TableCell } from '@material-ui/core';
import { connect } from 'react-redux';

import { higherSalarySelectors } from '../../redux/reducers/reducer';

const ListItemComponent = (props) => {
  const [isHigh, setIsHigh] = useState(false);

  const higherSal = () => {
    const empId = props.empDetails.id;
    if (props.higherSalary.some((emp) => emp.id === empId)) {
      setIsHigh(true);
    }
  };

  useEffect(() => {
    higherSal();
  }, []);

  const { empDetails } = props;

  return (
    <>
      <TableCell component="th" scope="row">
        {empDetails.id}
      </TableCell>
      <TableCell>{empDetails.employee_name}</TableCell>
      <TableCell>{empDetails.employee_salary}</TableCell>
      <TableCell>{isHigh ? 'true' : 'false'}</TableCell>
      <TableCell>{empDetails.employee_age}</TableCell>
    </>
  );
};

const mapStateToProps = (state) => ({
  higherSalary: higherSalarySelectors(state),
});

export default connect(mapStateToProps, null)(ListItemComponent);
