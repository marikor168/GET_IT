import React from 'react';
import { translateStatus } from '../app/utils';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Table, 
  TableContainer, 
  TableHead, 
  TableBody, 
  TableCell, 
  TableRow, 
  Paper } from '@material-ui/core';

import './my-table.css';

const StyledTableCell = withStyles((theme) => ({  
  head: {
    fontSize: 15,
    backgroundColor: "#3f51b5",
    color: '#ffffff',
  },
  body: {
    fontSize: 14,
    maxWidth: 250,
    overflow: "hidden",
    wordWrap: "break-word"
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 600,
    maxWidth: 1000,
    marginTop: 20,
    marginBottom: 30,
    overflow: "hidden",

  },
});

const MyTable = ({ data }) => {

  const classes = useStyles();
  const elements = addRowTable(data);
  
  return(
    <TableContainer align="center">
      <Paper elevation={10} className={classes.table} >
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Дата</StyledTableCell>
              <StyledTableCell>Действие</StyledTableCell>
              <StyledTableCell>Комментарий</StyledTableCell>
              <StyledTableCell>Пользователь</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {elements}
          </TableBody>
        </Table>
      </Paper>
    </TableContainer>
  );
};

function addRowTable (arr) {
  return arr.map((error, i) =>
    <TableRow key={i}>
      <StyledTableCell>{error.date}</StyledTableCell>
      <StyledTableCell>{translateStatus(error.status)}</StyledTableCell>
      <StyledTableCell>{error.error_comment}</StyledTableCell>
      <StyledTableCell>{error.user}</StyledTableCell>
    </TableRow>
  )
}

export default MyTable;