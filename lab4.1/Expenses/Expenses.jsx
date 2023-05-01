import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Filter from "./Filter/Filter"
import {useState}from "react";
function Expenses(props){
    let [filterYear, setFilterYear] = useState('2021')
    let [array, setArray] = useState(props.expense)

{/*loop qua dummy array -> render items */}
    const result = array.map(el=>(
    <Card className="expenses" key={el.id}>
        <ExpenseItem key={el.id} date={el.date} title={el.title} amount={el.amount}/> 
    </Card>));
{/*func nhan selected year tu filter va set state */}

    let filterArray =[];

    function renderFilterYear(filterData){
        console.log("renderFilterYear", filterData);
        filterArray = props.expense.filter(el=>{
            setFilterYear(filterData);
            return el.date.getFullYear().toString() == filterData;
        })
        console.log(result);
        console.log(filterArray);
        setArray(filterArray);
    }

    return(
        <div>
          <Filter 
            selected={filterYear} 
            onAddFilterYear={renderFilterYear}/>
            {result}
        </div>
    )
}

export default Expenses;