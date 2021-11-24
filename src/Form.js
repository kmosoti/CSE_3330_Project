import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'
import getArtist from './dbFiles/dbOperation.js'

//import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDownCircle';

function Form(){
    const [displayTrue, setDisplay] = React.useState(false);
    const [data, updateData] = React.useState();

    const handleDisplay = (e) =>{
        const tableResults = getArtist
        console.log(tableResults);
    }
    const handleToggle = (e) =>{
        console.log(displayTrue);
    }
    return(
        <div className="formSelect">
            <h1>SELECT AN ACTION</h1>
            <ButtonGroup varient="contained" aria-label="split button">
                <Button onClick={handleDisplay}>DISPLAY</Button>
                <Button onClick={handleToggle}>INSERT</Button>
                <Button onClick={handleToggle}>UPDATE</Button>
                <Button onClick={handleToggle}>DELETE</Button>
            </ButtonGroup>
        </div>
    );
}

export default Form;