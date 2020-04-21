import React from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper } from '@material-ui/core';


// import './table.css';
const StyledTableCell = withStyles((theme) => ({
  
  head: {
    fontSize: 15,
    backgroundColor: "#3f51b5",
    color: '#ffffff',
  },
  body: {
    fontSize: 14
  },
}))(TableCell);

const MyTable = ({ data }) => {
  const useStyles = makeStyles({
    table: {
      minWidth: 600,
      maxWidth: 1000,
      marginTop: 20,
      marginBottom: 30,
    },
  });

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

    {
      /* <table className="table">
      <caption className="table__title">История</caption>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Действие</th>
          <th>Комментарий</th>
          <th>Пользователь</th>
        </tr>
      </thead>
      <tbody>
        { elements }
      </tbody>
    </table> */
  }
    </TableContainer>
  );
};

function translate(label) {
  if (label === "new") {
    return "Новая";
  } else if (label === "opened") {
    return "Открытая";
  } else if (label === "resolved") {
    return "Решённая";
  } else {
    return "Закрытая";
  }
}

function addRowTable (arr) {
  return arr.map((error, i) =>
    <TableRow key={i}>
      <StyledTableCell>{error.date}</StyledTableCell>
      <StyledTableCell>{translate(error.status)}</StyledTableCell>
      <StyledTableCell>{error.error_comment}</StyledTableCell>
      <StyledTableCell>{error.user}</StyledTableCell>
    </TableRow>
  )
}

export default MyTable;