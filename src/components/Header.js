import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import { authActions } from "./store";
function Header(){
    const dispatch= useDispatch();
    const isLogin = useSelector(state=> state.auth.isLogin)
    function logoutHandler(){
        dispatch(authActions.logout())
    }
    return <div className={classes.header}>
        <h1>REDUX AUTH</h1>
       { isLogin && <ul>
            <li><a>My products</a></li>
            <li><a>My Sales</a></li>
            <li><button type="button" onClick={logoutHandler}>Logout</button></li>
        </ul>}
    </div>
}
export default Header;