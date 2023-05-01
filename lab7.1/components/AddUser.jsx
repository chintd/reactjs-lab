import "./AddUser.css";
import  ReactDOM ,{ useState } from 'react'; 
import Modal from "../modal/Modal"

const AddUser = (props)=>{
    const[ userInput, setUserInput]= useState("");
    const [ageInput, setAgeInput]= useState("");
    const [error,setError]= useState(null)
    function userHandler(e){
        setUserInput(e.target.value)
    }
    function ageHandler(e){
        setAgeInput(e.target.value)
    }
    function submitHandler (e){
        e.preventDefault();
        if(userInput.trim().length === 0 || ageInput.trim().length ===0){
            setError({
                title: " input",
                message: ' please enter a valid name and age (non-empty values)'
            })
            return
        }
        if(ageInput < 1){
            setError({
                title: ' age',
                message: 'please enter a valid age (>0)'
            })
            return
        }
        const newUser ={
            username: userInput,
            age: ageInput
        }
        props.onAddUser(newUser);
        setUserInput('');
        setAgeInput('')
    }
    function errorHandler(){
        setError(null)
    }
    return(<>
    {error !== null && <Modal title={error.title}
      message={error.message}
      onConfirm={errorHandler}/>}
    
    <form className="form" onSubmit={submitHandler}>
        <div className="form-control">
            <label htmlFor="name">Username</label>
            <input id="name" type="text" value={userInput} onChange={userHandler}/>
        </div>
        <div className="form-control">
            <label htmlFor="age">Age (years)</label>
            <input id="age" type="number" value={ageInput} onChange={ageHandler} step="1" min ="0" max="90"/>
        </div>
        <div className="form-btn">
            <button type="submit">Add User</button>
        </div>
    </form>
    </>)
}
export default AddUser;