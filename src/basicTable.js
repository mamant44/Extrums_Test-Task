import React from "react";
import {styled} from "@mui/material/styles";
import {TableBody, TableRow} from "@mui/material";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
        fontWeight: 700,
        color: '#000',
        textAlign: 'center'
    },
    '&:first-of-type': {
        textAlign: 'left'
    }
}));


const BasicTable = ({type, activity}) => {

    return (
        <TableBody>
            <TableRow>
                <StyledTableCell>{activity}</StyledTableCell>
                <StyledTableCell>{type}</StyledTableCell>
                <StyledTableCell>Just now</StyledTableCell>
            </TableRow>
        </TableBody>
    );
}

export default BasicTable