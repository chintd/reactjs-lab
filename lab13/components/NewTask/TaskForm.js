import classes from './TaskForm.module.css';
import useHttp from "../../hooks/useHttp";
import Section from '../UI/Section';
import {useRef} from "react"
function TaskForm (props){
    const inputRef = useRef();
    const {isLoading, error, sendRequest : addTaskHandler}=useHttp();
    function addNewTask(data){
        const createTask = {id: data.name, text : inputRef.current.value}
        props.onAddTask(createTask);
    }

    function submitHandler(e){
        e.preventDefault();
        addTaskHandler({url:"https://tasks-76ed3-default-rtdb.firebaseio.com/tasks.json", method : "POST",
        body: {text: inputRef.current.value},
        header : {
            "content-Type" : "application/json"
        }
    },  addNewTask)
    }
    return <Section>
            <form className={classes.form} onSubmit={submitHandler}>
                <input type='text' ref={inputRef}></input>
                <button type='submit'>Add Task</button>  
            </form>
            {error && <p>{error}</p>}
        </Section> 
}
export default TaskForm