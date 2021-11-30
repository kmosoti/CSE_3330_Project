import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import dbSelect from './dbFiles/dbOperation'

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function DenseTable(rows) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>aID</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">birthDate</TableCell>
            <TableCell align="right">deathDate</TableCell>
            <TableCell align="right">commission</TableCell>
            <TableCell align="right">street</TableCell>
            <TableCell align="right">city</TableCell>
            <TableCell align="right">stateAB</TableCell>
            <TableCell align="right">zipcode</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">{row.aid}</TableCell>
                <TableCell scope="row">{row.name}</TableCell>
                <TableCell align="right">{row.birthDate}</TableCell>
                <TableCell align="right">{row.deathDate}</TableCell>
                <TableCell align="right">{row.commission}</TableCell>
                <TableCell align="right">{row.street}</TableCell>
                <TableCell align="right">{row.city}</TableCell>
                <TableCell align="right">{row.stateAB}</TableCell>
                <TableCell align="right">{row.zipcode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

rows = dbSelect()