import { useState } from "react";
import classes from "./Auth.module.css";
import { authActions } from "./store";
import { useDispatch, useSelector } from "react-redux";
function Auth(props){
    const dispatch= useDispatch();
    const [emailValue,setEmailValue] = useState("");
    const [passValue, setPassValue]= useState("");
    const [emailIsTouch,setEmailIsTouch]= useState(false)
    const [passIsTouch,setPassIsTouch]= useState(false)
    const emailHasError = emailValue.trim()==="" && emailIsTouch;
    const passHasError= passValue.trim()==="" && passIsTouch;
    let formIsValid =false;
    if(emailValue.trim()!=="" && passValue.trim( ) !== ""){
        formIsValid = true
    }
    function inputChangeHandler(e){
        setEmailValue(e.target.value)
    }
    function passwordChangeHandler(e){
        setPassValue(e.target.value)
    }
    function emailBlurHandler(){
        setEmailIsTouch(true)
    }
    function passwordBlurHandler(){
        setPassIsTouch(true)
    }
    function submitHandler(e){
        e.preventDefault();
        if(formIsValid){
            dispatch(authActions.login())
        }
        }
        
    return(<form onSubmit={submitHandler} className={classes.auth}>
        <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" 
            onChange={inputChangeHandler} 
            id="email"
            onBlur={emailBlurHandler}></input>
            {emailHasError && <p className={classes["error-text"]}>please input valid email</p>}
        </div>
        <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" 
            onChange={passwordChangeHandler}
             id="password"
             onBlur={passwordBlurHandler}></input>
             {passHasError && <p className={classes["error-text"]}>Please input valid password</p>}
        </div>
        <button type="submit">Login</button>
    </form>)
}
export default Auth;