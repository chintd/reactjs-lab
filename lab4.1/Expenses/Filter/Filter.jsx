import ExpenseForm from "../ExpenseForm/ExpenseForm"
import "./Filter.css"
import { useState } from "react"

const Filter=(props)=>{
    function selectHandler(event){
        props.onAddFilterYear(event.target.value)
        console.log("filter")
        console.log(event.target.value)
    }
    return(
    <div className="select-container">
        <h1> Filter by year</h1>
        <select value={props.selected} onChange={selectHandler}>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
     </select>
    </div>)
}

export default Filter;