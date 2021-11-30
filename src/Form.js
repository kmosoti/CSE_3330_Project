import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'
import displayTable from './functionclasses/displayTable';
import { FormatColorReset } from '@mui/icons-material';


class Form extends React.Component{
    state = {
        displayTrue: false,
        InsertTrue: false,
        updateTrue: false,
        deleteTrue: false
    }
    //const [data, updateData] = React.useState();

    handleDisplay = (e) =>{
        this.setState({displayTrue: true})
        this.setState({InsertTrue: false})
        this.setState({updateTrue: false})
        this.setState({deleteTrue: false})
        console.log(this.state.displayTrue);
    }
    handleInsert = (e) =>{
        this.setState({displayTrue: false})
        this.setState({InsertTrue: true})
        this.setState({updateTrue: false})
        this.setState({deleteTrue: false})
        console.log(this.state.InsertTrue);
    }
    handleUPDATE = (e) =>{
        this.setState({displayTrue: false})
        this.setState({InsertTrue: false})
        this.setState({updateTrue: true})
        this.setState({deleteTrue: false})
        console.log(this.state.updateTrue);
    }
    handleDELETE = (e) =>{
        this.setState({displayTrue: false})
        this.setState({InsertTrue: false})
        this.setState({updateTrue: false})
        this.setState({deleteTrue: true})
        console.log(this.state.deleteTrue);
    }
    render(){
                if(this.state.displayTrue && !this.state.InsertTrue && !this.state.updateTrue && !this.state.deleteTrue){
                    return(
                        
                        <div>
                            <div className="formSelect">
                                <h2>SELECT AN ACTION</h2>
                                <ButtonGroup varient="contained" aria-label="split button">
                                    <Button onClick={this.handleDisplay}>DISPLAY</Button>
                                    <Button onClick={this.handleInsert}>INSERT</Button>
                                    <Button onClick={this.handleUPDATE}>UPDATE</Button>
                                    <Button onClick={this.handleDELETE}>DELETE</Button>
                                </ButtonGroup>
                            </div>
                            <h3>Display Table</h3>
                        </div>
                        );
                }
                else if(!this.state.displayTrue && this.state.InsertTrue && !this.state.updateTrue && !this.state.deleteTrue){
                    return(   
                    <div>
                        <div className="formSelect">
                            <h2>SELECT AN ACTION</h2>
                            <ButtonGroup varient="contained" aria-label="split button">
                                <Button onClick={this.handleDisplay}>DISPLAY</Button>
                                <Button onClick={this.handleInsert}>INSERT</Button>
                                <Button onClick={this.handleUPDATE}>UPDATE</Button>
                                <Button onClick={this.handleDELETE}>DELETE</Button>
                            </ButtonGroup>
                        </div>
                        <h3>Insert Record</h3>
                    </div>
                    );
                }
                else if(!this.state.displayTrue && !this.state.InsertTrue && this.state.updateTrue && !this.state.deleteTrue){
                    return(   
                    <div>
                        <div className="formSelect">
                            <h2>SELECT AN ACTION</h2>
                            <ButtonGroup varient="contained" aria-label="split button">
                                <Button onClick={this.handleDisplay}>DISPLAY</Button>
                                <Button onClick={this.handleInsert}>INSERT</Button>
                                <Button onClick={this.handleUPDATE}>UPDATE</Button>
                                <Button onClick={this.handleDELETE}>DELETE</Button>
                            </ButtonGroup>
                        </div>
                        <h3>Update Record</h3>
                    </div>
                    );
                }
                else if(!this.state.displayTrue && !this.state.InsertTrue && !this.state.updateTrue && this.state.deleteTrue){
                    return(   
                    <div>
                        <div className="formSelect">
                            <h2>SELECT AN ACTION</h2>
                            <ButtonGroup varient="contained" aria-label="split button">
                                <Button onClick={this.handleDisplay}>DISPLAY</Button>
                                <Button onClick={this.handleInsert}>INSERT</Button>
                                <Button onClick={this.handleUPDATE}>UPDATE</Button>
                                <Button onClick={this.handleDELETE}>DELETE</Button>
                            </ButtonGroup>
                        </div>
                        <h3>Delete Record</h3>
                    </div>
                    );
                }
                else {
                    return(
                        <div className="formSelect">
                            <h2>SELECT AN ACTION</h2>
                            <ButtonGroup varient="contained" aria-label="split button">
                                <Button onClick={this.handleDisplay}>DISPLAY</Button>
                                <Button onClick={this.handleInsert}>INSERT</Button>
                                <Button onClick={this.handleUPDATE}>UPDATE</Button>
                                <Button onClick={this.handleDELETE}>DELETE</Button>
                            </ButtonGroup>
                        </div>
                    );
                }
            }
    }

export default Form