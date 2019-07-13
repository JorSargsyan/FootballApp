import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    background:"#ffffff99"
  },
  table: {
    minWidth: 250,
  },
  tableRow:{
      fontSize:"25px",
      alignItems:"center",
      cursor:"pointer"
  },
  tableTd:{
    fontSize:"18px",
    textAlign: "center"
  },
  tableFlexTd:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize:"18px",
    textAlign: "center",
    "& a":{
        display:"flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize:"18px",
        textAlign: "center",
        width:"100%"
    }
  },
  tableHead:{
      background:"black",
  },
  tableHeadTd:{
      color:"white",
      fontSize:"18px",
      textAlign: "center"
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
                    return <TableCell className={classes.tableHeadTd} key={i} align="left">{x.name}</TableCell>
                })
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
              
                    <TableRow  key={row.name} className={classes.tableRow}>
                    <TableCell className={classes.tableTd}>{row.rank}</TableCell>
                    <TableCell className={classes.tableFlexTd}  align="left"> <Link to={`/team/${row.team_id}`}> <b>{row.teamName}</b> <img className={classes.tableImg} src={row.logo} /></Link> </TableCell>
                    <TableCell className={classes.tableTd} align="left">{row.points}</TableCell>
                    <TableCell className={classes.tableTd} align="left">{row.forme}</TableCell>
                    <TableCell className={classes.tableTd} align="left">{row.goalsDiff}</TableCell>
                    
                    <TableCell className={classes.tableTd} align="left">{row.all.matchsPlayed}</TableCell>
                    <TableCell className={classes.tableTd} align="left">{row.all.win}</TableCell>
                    <TableCell className={classes.tableTd} align="left">{row.all.draw}</TableCell>
                    <TableCell className={classes.tableTd} align="left">{row.all.lose}</TableCell>
                    <TableCell className={classes.tableTd} align="left">{row.description}</TableCell>
                    </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}