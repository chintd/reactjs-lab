import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";
import { useState } from "react";
function ExpenseItem(props){
    let [update,setUpdate] = useState(props.expense.title)
    const day= props.expense.date.toLocaleString("en-US", {day : '2-digit'});
    const month = props.expense.date.toLocaleString('en-US',{month: "long"});
    const year = props.expense.date.getFullYear();

    {/*ham thay doi title */}
    function changeTitleHandler(){
        setUpdate("Update!!!");
    }
    return(<Card className="expense-item">
        <ExpenseDate month={month} year={year} day={day}/>
        <h1 className="title" >{update}</h1>
        <div className="price-container">
        <div className="price" >${props.expense.amount}</div>
        </div>
        <button id="changeBtn"type="button" onClick={changeTitleHandler}>Change Title</button>
    </Card>)
}
export default ExpenseItem;