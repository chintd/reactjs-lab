import "./ExpenseForm.css";
import React, {useState} from "react";
import Card from "../Card";

const ExpenseForm = (props)=>{
    let [titleInput, setTitleInput]= useState('');
    let [amountInput, setAmountInput]= useState('');
    let [dateInput, setDateInput]= useState('');
    function submitHandler(e){
        e.preventDefault();
        if(e.target.value=== ""){
            return alert('fill in form!!!')
        }
        console.log(titleInput + " "+ amountInput+" "+ dateInput)
        const newData ={
          
            title: titleInput,
            amount: Number(amountInput),
            date: new Date(dateInput)
        }
        props.onAddData(newData);
        setAmountInput("");
        setTitleInput("");
        setDateInput("")
        
    }
    function changeAmount(e){
        setAmountInput(e.target.value);
    }
    function changeDate(e){
        setDateInput(e.target.value)
    }
    function changeTitle(e){
        setTitleInput(e.target.value);
    }
    return(<Card>
        <form onSubmit={submitHandler}>
        <div className="control">
            <label htmlFor="title">Title</label>
            <input value={titleInput} type="text" id="title" onChange={changeTitle}></input>
        </div>
        <div className="control">
            <label htmlFor="amount">Amount</label>
            <input value={amountInput} type="number" id="amount" onChange={changeAmount}></input>
        </div>
        <div className="control">
            <label htmlFor="date">Date</label>
            <input value={dateInput} type="date" id="date" onChange={changeDate}></input>
        </div>
        <br/>
        <div className="btn">
            <button >Add Expense</button>
        </div>
    </form>
    </Card>)
}
export default ExpenseForm;