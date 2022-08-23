import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

export default class ToDoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todoData:this.props.todoData
        }
    }

    componentDidMount(){
        this.setState({todoData:this.props.todoData});
    }

    handleTitleChange=(e,id)=>{
        let newData = this.state.todoData.map((item)=>{
            if(id===item.id){
                item.title=e.target.value;
            }
            return item;
        });
        // this.setState({todoData:newData});
        this.props.changeToDo(newData);
    }

    handleDelete=(id)=>{
        let newList = this.props.todoData.filter((item)=>{
            return item.id!==id;
        });
        this.props.changeToDo(newList);
    }

    render(){
        return(
            <div>
                <Card>
                    <Typography variant="h6">Todo List</Typography>
                    <List id="todos">
                        {this.props.todoData.length!==0?
                        this.props.todoData.map((item)=>{
                            return(
                                <React.Fragment key={item.id}>
                                    <ListItem>
                                        <ListItemAvatar>{item.id}</ListItemAvatar>
                                        <ListItemText>{item.title}</ListItemText>
                                        <Button style={{alignSelf:"right",width:"50px"}}
                                        onClick={()=>this.handleDelete(item.id)}
                                        >Delete</Button>
                                    </ListItem>
                                    <Divider />
                                </React.Fragment>
                            )
                        }):null}
                    </List>
                </Card>
            </div>
        );
    }
}