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
        console.log(titleInput + " "+ amountInput+" "+ dateInput)
        // const newData ={
        //     id: Math.random(),
        //     title: titleInput,
        //     amount: amountInput,
        //     date: dateInput
        // }
        titleInput ="";
        amountInput="";
        dateInput="";
        
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
            <input type="text" id="title" onInput={changeTitle}></input>
        </div>
        <div className="control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" onInput={changeAmount}></input>
        </div>
        <div className="control">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" onInput={changeDate}></input>
        </div>
        <br/>
        <div className="btn">
            <button >Add Expense</button>
        </div>
    </form>
    </Card>)
}
export default ExpenseForm;