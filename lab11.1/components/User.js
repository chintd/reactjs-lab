import classes from "./User.module.css"
import { Component } from "react";
class User extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <li className={classes.user}>
            {this.props.name}
        </li>
    }
}
export default User