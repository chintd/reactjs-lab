import "./ExpenseForm.css";
import React, {useState} from "react";
import Card from "../Card";

const ExpenseForm = (props)=>{
    const [titleInput, setTitleInput]= useState('');
    const [amountInput, setAmountInput]= useState('');
    const [dateInput, setDateInput]= useState('');
    function submitHandler(e){
        e.preventDefault();
        if(e.target.value=== ""){
            return alert('fill in form!!!')
        }
        setTitleInput(e.target.value);
        setAmountInput(e.target.value);
        setDateInput(e.target.value)
    }
    return(<Card>
        <form onSubmit={submitHandler}>
        <div className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" ></input>
        </div>
        <div className="control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" ></input>
        </div>
        <div className="control">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" ></input>
        </div>
        <div className="btn">
            <button >Add Expense</button>
        </div>
    </form>
    </Card>)
}
export default ExpenseForm;