import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  tableRow:{
      fontSize:"25px",
      alignItems:"center"
  }
}));


export default function SimpleTable({data,header}) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead className={classes.tableHead}>
          <TableRow>
            {
                header.map((x,i)=>{
                    return <TableCell key={i} align="right">{x.name}</TableCell>
                })
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.name} className={classes.tableRow}>
              <TableCell component="th" scope="row">
                {row.rank}
              </TableCell>
              <TableCell align="right">{row.teamName} <img src={row.logo}></img> </TableCell>
              <TableCell align="right">{row.points}</TableCell>
              <TableCell align="right">{row.forme}</TableCell>
              <TableCell align="right">{row.goalsDiff}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}