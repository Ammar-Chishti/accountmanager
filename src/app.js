import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {TextField} from "@material-ui/core";
import {Button} from "@material-ui/core";

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 18,
    },
    body: {
        fontSize: 16,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

function createData(date, type, description, amount) {
    return {date, type, description, amount};
}


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(0),
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
}));

export default function CustomizedTables() {

    var savedTransactions = [];
    savedTransactions.push(createData("January 6th, 2019", "Food", "Purchased from Micky D's", 6.52));

    var [rows, setRows] = React.useState(savedTransactions);

    var [date, setDate] = React.useState("");
    var [type, setType] = React.useState("");
    var [description, setDescription] = React.useState("");
    var [amount, setAmount] = React.useState("");

    function addRow() {
        setRows([...rows, createData(date, type, description, amount)]);
    }

    const classes = useStyles();

    return (
        <div>
            <StyledTableCell><Button variant="contained" onClick={addRow}>Submit</Button></StyledTableCell>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">Date</StyledTableCell>
                            <StyledTableCell align="left">Type</StyledTableCell>
                            <StyledTableCell align="left">Description</StyledTableCell>
                            <StyledTableCell align="left">Amount</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow>
                            <StyledTableCell><TextField/></StyledTableCell>
                            <StyledTableCell><TextField/></StyledTableCell>
                            <StyledTableCell><TextField/></StyledTableCell>
                            <StyledTableCell><TextField/></StyledTableCell>
                        </StyledTableRow>
                        {rows.map(row => (
                            <StyledTableRow key={row.date}>
                                <StyledTableCell align="left">
                                    {row.date}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.type}</StyledTableCell>
                                <StyledTableCell align="left">{row.description}</StyledTableCell>
                                <StyledTableCell align="left">{row.amount}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}
