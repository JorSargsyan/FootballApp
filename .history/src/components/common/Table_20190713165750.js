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
  },
  tableTd:{
    fontSize:"21px"
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
                    return <TableCell className={classes.tableTd} key={i} align="left">{x.name}</TableCell>
                })
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.name} className={classes.tableRow}>
              <TableCell className={classes.tableTd} component="th" scope="row">
                {row.rank}
              </TableCell>
              <TableCell className={classes.tableTd} align="left">{row.teamName} <img className={classes.tableimg} src={row.logo}></img> </TableCell>
              <TableCell className={classes.tableTd} align="left">{row.points}</TableCell>
              <TableCell className={classes.tableTd} align="left">{row.forme}</TableCell>
              <TableCell className={classes.tableTd} align="left">{row.goalsDiff}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}