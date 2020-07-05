import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import fetch from 'isomorphic-unfetch'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import EditIcons from '@material-ui/icons/Edit'

import { addListData } from '../redux/actions/actionCreators'
import ListItemComponent from './ListItemComponent';
// import EditModal from './EditModal';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ListComponent = (props) => {

  const [edit, setEdit] = useState(false)

  useEffect(() => {
    fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then(res => res.json())
      .then(res => props.addListData(res.data))
  }, [])

  const classes = useStyles();

  const editItem = () => {
    setEdit(!edit)
  }
  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Employee Name</TableCell>
              <TableCell>Employee Salary</TableCell>
              <TableCell>salary > 2,00,000</TableCell>
              <TableCell>Employee Age</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.empList.map(emp => (
              <TableRow key={emp.id}>
                <ListItemComponent empDetails={emp} />
                <TableCell>
                  <IconButton onClick={editItem}>
                    <EditIcons />
                  </IconButton>
                </TableCell>
              </TableRow>

            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* {edit &&  <EditModal/>} */}
    </Fragment>
  )
}
const mapStateToProps = (state) => ({
  empList: state.sampleReducer.empList
})
const mapDispatchToProps = (dispatch) => ({
  addListData: (data) => dispatch(addListData(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(ListComponent)
