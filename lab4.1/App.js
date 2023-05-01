import Expenses from './Expenses/Expenses';
import './App.css';
import Card from './Expenses/Card';
import ExpenseForm from './Expenses/ExpenseForm/ExpenseForm';
import { useState } from 'react';
const expenses = [{
  id: 'e1',
  title: 'Toilet Paper',
  amount: 94.12,
  date: new Date(2020, 7, 14),
},
{
  id: 'e2',
  title: 'New TV',
  amount: 799.49,
  date: new Date(2021, 2, 12)
},
{
  id: 'e3',
  title: 'Car Insurance',
  amount: 294.67,
  date: new Date(2021, 2, 28),
},
{
  id: 'e4',
  title: 'New Desk (Wooden)',
  amount: 450,
  date: new Date(2021, 5, 12),
},
]
function App(props) {
  
  const [expenseArr, setExpenseArr]=useState(expenses)
  function addDataHandler(enteredData){
    const newData={
      id: Math.random().toString(),
      ...enteredData,
    }
    setExpenseArr(prevState=> [newData,...prevState])
  }
  
  return (
    <div>    
      <ExpenseForm onAddData={addDataHandler}/>  
      <Card className="App">   
        <Expenses expense={expenseArr}/>
      </Card>
    </div>
  );
}

export default App;
