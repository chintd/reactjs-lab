import classes from "./UserFinder.module.css";
import { Component } from "react";
import Users from "./Users";
import UserContext from "./user-context";
class UserFinder extends Component{
    static contextType = UserContext;
    constructor(props){
        super(props);
        this.state={
            userArray: [],
            searchTerm :""
        }
    }
    componentDidMount(){
        this.setState({userArray: this.context.users})
    }
    componentDidUpdate(preProps, preState){
        if(preState.searchTerm !== this.state.searchTerm){
            if(this.state.searchTerm.length !==0){
                const userList = this.context.users.filter(user=>{
                    if(user.name.includes(this.state.searchTerm)) {
                        return user
                    }
                })
                this.setState({
                    userArray: userList
                })
                console.log(this.state.userArray)

            }
        }
    }
    findUserHandler(e){
        this.setState({searchTerm : e.target.value})
    }
    render(){
        return<>
        <form className={classes.finder}>
            <input type="text" onChange={this.findUserHandler.bind(this)}/>
        </form>
        <Users users={this.state.userArray}/>
        </> 
}
}
export default UserFinder