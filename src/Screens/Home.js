import React from 'react';
import axios from 'axios';
import { Grid, Paper, TextField } from '@mui/material';
import ToDoList from '../Components/ToDoList';
import Button from '@mui/material/Button';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todoData:[],
            todoText:""
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/todos?userId=1")
        .then(res=>{this.setState({todoData:res.data});})
        .catch(err=>console.log(err));
    }

    changeToDo=(newList)=>{
        this.setState({todoData:newList});
    }

    handleText=(e)=>{
        this.setState({todoText:e.target.value});
    }

    handleAdd=()=>{
        this.setState({todoData:[...this.state.todoData,{
            userId:1,
            id:this.state.todoData[this.state.todoData.length-1].id+1,
            title:this.state.todoText
        }]});
        this.setState({todoText:""});
    }
    
    render(){
        return(
            <Grid container direction="row" style={{width:"100%", height:"100%"}}>
                <Grid item xs={12}>
                    <Paper elevation={3} style={{backgroundColor:"dodgerblue", padding:"20px", color:"white"}}>
                        Home
                    </Paper>
                </Grid>
                <Grid item xs={12} style={{width:"100%",padding:"20px"}}>
                    <Grid item xs={12} style={{height:"80vh",overflow:"auto"}}>
                        <ToDoList todoData={this.state.todoData} changeToDo={this.changeToDo} />
                    </Grid>
                    <Grid item xs={12} style={{height:"20vh"}}>
                        <Grid container direction="row">
                            <Grid item xs={10}>
                                <TextField value={this.state.todoText} size="small" fullWidth  onChange={(e)=>this.handleText(e)} placeholder="Type a new todo here..." />
                            </Grid>
                            <Grid item>
                                <Button onClick={this.handleAdd}>Add</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}