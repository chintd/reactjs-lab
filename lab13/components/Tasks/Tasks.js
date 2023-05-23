import classes from "./Tasks.module.css";
import TaskItem from "./TaskItem";

function Tasks (props){
    let context = <p> found no task</p>
    if(props.tasks.length > 0){
        context = <ul>{props.tasks.map(el=><TaskItem key={Math.random()} text={el.text}/>)}</ul>
    }
    if(props.error !== null){
        context = <p>something wrong</p>
    }
    if(props.loading){
        context = <p>Loading tasks...</p>
    }
    return <div className={classes.container}>
        {context}
    </div>
}
export default Tasks