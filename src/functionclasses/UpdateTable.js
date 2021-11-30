import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';
//import sqlTable from 'table'
//import dbSelect from '../dbFiles/dbOperation'

function createData(aID, name, birthDate, dedathDate, commission, street, city, stateAB, zipCode) {
    return {aID, name, birthDate, dedathDate, commission, street, city, stateAB, zipCode};
  }

const data_store = [
    {
      aID: '1',
      name: 'Abed Abdi',
      birthDate: 'Fri Dec 31 1999 18:00:00 GMT-0600 (Central Standard Time)',
      deathDate: 'null',
      commission: '10',
      street: '309 Hcounty Road',
      city: 'Abbott',
      stateAB: 'TX',
      zipcode: '76621-0057'
    },
    {
      aID: '2',
      name: 'Ismail Gulg',
      birthDate: 'Tue Jan 02 1990 18:00:00 GMT-0600 (Central Standard Time)',
      deathDate: 'null',
      commission: '11',
      street: '405 E Mesquite Street',
      city: 'Abbott',
      stateAB: 'TX',
      zipcode: '76621-0057'
    },
    {
      aID: '3',
      name: 'Shakir Ali',
      birthDate: 'Fri Feb 03 1995 18:00:00 GMT-0600 (Central Standard Time)',
      deathDate: 'null',
      commission: '12',
      street: '5000 Spectrum Street',
      city: 'Addison',
      stateAB: 'TX',
      zipcode: '75001-6880'
    },
    {
      aID: '4',
      name: 'Abdur Rahman',
      birthDate: 'Wed Feb 04 1970 18:00:00 GMT-0600 (Central Standard Time)',
      deathDate: 'null',
      commission: '10',
      street: '1000 County Road',
      city: 'Bradley',
      stateAB: 'Ok',
      zipcode: '73011-0121'
    },
    {
      aID: '5',
      name: 'Kalipada Ghoshal',
      birthDate: 'Fri Dec 31 1993 18:00:00 GMT-0600 (Central Standard Time)',
      deathDate: 'null',
      commission: '10',
      street: 'Boundary Road',
      city: 'Bradley',
      stateAB: 'OK',
      zipcode: '73011-9600'
    },
    {
      aID: '6',
      name: 'Manishi Dey',
      birthDate: 'Thu Jul 14 1994 19:00:00 GMT-0500 (Central Daylight Time)',
      deathDate: 'null',
      commission: '11',
      street: '450 Main Street',
      city: 'Mound City',
      stateAB: 'KS',
      zipcode: '66056-0001'
    },
    {
      aID: '7',
      name: 'Nandalal Bose',
      birthDate: 'Tue Jan 08 1980 18:00:00 GMT-0600 (Central Standard Time)',
      deathDate: 'null',
      commission: '15',
      street: 'S Metcalf Road',
      city: 'Louisburg',
      stateAB: 'KS',
      zipcode: '66053-0541'
    },
    {
      aID: '8',
      name: 'Raja Ravi Varma',
      birthDate: 'Fri Sep 18 1970 19:00:00 GMT-0500 (Central Daylight Time)',
      deathDate: 'null',
      commission: '12',
      street: '2000 Forest Grove blvd',
      city: 'Allen',
      stateAB: 'TX',
      zipcode: '75002-8811'
    },
    {
      aID: '9',
      name: 'Sunil Das',
      birthDate: 'Wed Jul 31 1985 19:00:00 GMT-0500 (Central Daylight Time)',
      deathDate: 'null',
      commission: '10',
      street: '4000 Woodcreek Road',
      city: 'Carrollton',
      stateAB: 'TX',
      zipcode: '75006-1911'
    },
    {
      aID: '10',
      name: 'Jasper Johns',
      birthDate: 'Thu Jan 01 1970 18:00:00 GMT-0600 (Central Standard Time)',
      deathDate: 'null',
      commission: '12',
      street: '2500 Sunset Ridge Drive',
      city: 'Rockwall',
      stateAB: 'TX',
      zipcode: '75032-0006'
    },
    {
      aID: '11',
      name: 'Winslow Homer',
      birthDate: 'Thu Feb 08 1990 18:00:00 GMT-0600 (Central Standard Time)',
      deathDate: 'null',
      commission: '11',
      street: '11300 Juniper Lane',
      city: 'Irving',
      stateAB: 'TX',
      zipcode: '75039-0101'
    },
    {
      aID: '12',
      name: 'Albert Bierstadt',
      birthDate: 'Thu Sep 09 1999 19:00:00 GMT-0500 (Central Daylight Time)',
      deathDate: 'null',
      commission: '10',
      street: '400 Spruce Street',
      city: 'Leavenworth',
      stateAB: 'KS',
      zipcode: '66048-0001'
    },
    {
      aID: '13',
      name: 'Edward Hopper',
      birthDate: 'Wed Jan 19 2000 18:00:00 GMT-0600 (Central Standard Time)',
      deathDate: 'null',
      commission: '11',
      street: '1500 255th Street',
      city: 'Hillsdale',
      stateAB: 'KS',
      zipcode: '66036-0061'
    },
    {
      aID: '14',
      name: "Georgia O'Keeffe",
      birthDate: 'Tue Nov 04 1997 18:00:00 GMT-0600 (Central Standard Time)',
      deathDate: 'null',
      commission: '11',
      street: '3000 Weiss Lane',
      city: 'Irving',
      stateAB: 'TX',
      zipcode: '75039-0006'
    },
    {
      aID: '15',
      name: 'Modupeola Fadugba',
      birthDate: 'Sat Aug 04 2001 19:00:00 GMT-0500 (Central Daylight Time)',
      deathDate: 'null',
      commission: '11',
      street: '1112 18TH Street',
      city: 'Plano',
      stateAB: 'TX',
      zipcode: '75086-0019'
    },
    {
      aID: '16',
      name: 'Ekene Maduka',
      birthDate: 'Thu Feb 08 1990 18:00:00 GMT-0600 (Central Standard Time)',
      deathDate: 'null',
      commission: '12',
      street: '15TH Street',
      city: 'Plano',
      stateAB: 'TX',
      zipcode: '75086-0015'
    },
    {
      aID: '17',
      name: 'Olu Amoda',
      birthDate: 'Thu Jul 14 1994 19:00:00 GMT-0500 (Central Daylight Time)',
      deathDate: 'null',
      commission: '14',
      street: '200 Travis Street',
      city: 'Sherman',
      stateAB: 'TX',
      zipcode: '75090-0005'
    },
    {
      aID: '18',
      name: 'Koki Tanaka',
      birthDate: 'Thu Jul 14 1994 19:00:00 GMT-0500 (Central Daylight Time)',
      deathDate: 'null',
      commission: '12',
      street: '5000 W Holiday Road',
      city: 'Fate',
      stateAB: 'TX',
      zipcode: '75087-2136'
    },
    {
      aID: '19',
      name: 'Tatsuo Miyajima',
      birthDate: 'Tue Jul 06 1999 19:00:00 GMT-0500 (Central Daylight Time)',
      deathDate: 'null',
      commission: '11',
      street: 'Bella Ranch Drive',
      city: 'Choctaw',
      stateAB: 'OK',
      zipcode: '73020-0017'
    },
    {
      aID: '20',
      name: 'Li Chen',
      birthDate: 'Wed Jan 19 2000 18:00:00 GMT-0600 (Central Standard Time)',
      deathDate: 'null',
      commission: '12',
      street: '2090 County Road',
      city: 'Cement',
      stateAB: 'OK',
      zipcode: '73017-1100'
    },
    {
      aID: '21',
      name: 'Zhan Wang',
      birthDate: 'Tue Mar 02 1999 18:00:00 GMT-0600 (Central Standard Time)',
      deathDate: 'null',
      commission: '12',
      street: '1600 N Santa Fe',
      city: 'Edmond',
      stateAB: 'OK',
      zipcode: '73003-3661'
    }
  ]
var rows = data_store
//const rows = data_store
class DisplayTable extends React.Component{
    //rows = data_store
    state = {
        aIDSearch: '',
        nameSearch: '',
        commissionSearch: '',
        rows: data_store
    }
    handleChangeID = (e) =>{
        this.setState({aIDSearch: e.target.value})
        var tempArray = this.state.rows
        
        tempArray.find(x=>x.aID.includes(""+e.target.value+""))
        console.log(tempArray);
    }
    handleChangeName = (e) =>{
        this.setState({nameSearch: e.target.value})
        console.log(this.state.nameSearch);
    }
    handleChangeRate = (e) =>{
        this.setState({commissionSearch: e.target.value})
        console.log(this.state.commissionSearch);
    }

    render(){
        return (
          <div>
            <div>
                <TextField id="standard-basic" label="Artist ID" variant="standard" onChange={this.handleChangeID} />
                <TextField id="standard-basic" label="Name" variant="standard" onChange={this.handleChangeName} />
                <TextField id="standard-basic" label="Commission Rate" variant="standard" onChange={this.handleChangeRate}/>   
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ width: '70%', margin: 'auto' }} size="small" aria-label="a dense table">
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
                    {this.state.rows.map((row) => (
                    <TableRow
                        key={row.aID}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">{row.aID}</TableCell>
                        <TableCell align="right">{row.name}</TableCell>
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
          </div>
        );
      }
}

export default DisplayTable

