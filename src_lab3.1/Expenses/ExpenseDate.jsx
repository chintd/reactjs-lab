import "./ExpenseDate.css";
function ExpenseDate(props){
    return(
        <div className="expense-date">
            <h3>{props.month}</h3>
            <p>{props.year}</p>
            <h1>{props.day}</h1>
        </div>
    )
}

export default ExpenseDate;