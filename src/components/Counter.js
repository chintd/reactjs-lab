import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "./store";
function Counter(){
    const counter= useSelector(state=>state.counter.counter);
    const showCounter = useSelector(state=> state.counter.showCounter)
    const dispatch= useDispatch();
    function increHandler(){
        dispatch(counterActions.increment())
    }
    function decreHandler(){
        dispatch(counterActions.decrement())
    }
    function increaseHandler(){
        dispatch(counterActions.increase(5))
    }
    function toggleHandler(){
        dispatch(counterActions.toggle())
    }
    return<div className={classes.counter}>
        <h1>REDUX COUNTER</h1>
        {!showCounter && <div className={classes.value}>{counter}</div>}
        <button type="button" onClick={increHandler}>Increment</button>
        <button type="button" onClick={increaseHandler}>Increase by 5</button>
        <button type="button" onClick={decreHandler}>Decrement</button>
        <button type="button" onClick={toggleHandler}>Toggle Counter</button>
    </div>
}
export default Counter