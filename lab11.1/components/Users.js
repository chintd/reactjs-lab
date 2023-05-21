import classes from "./Users.module.css";
import { Component } from "react";
import User from "./User";
class Users extends Component{
    constructor(props){
        super(props);
        this.state ={
            showUser: true
        }
    }
    hideUserHandler(){
        this.setState(preState=>{return{showUser: !preState.showUser}})
    }
    render(){
        return <div className={classes.users}>
            <button type="button" onClick={this.hideUserHandler.bind(this)}>Hide User</button>
            <ul>
                {this.state.showUser && this.props.users.map(el=><User key={Math.random()} name={el.name}/>)}
            </ul>
        </div>
    }
}

export default Users