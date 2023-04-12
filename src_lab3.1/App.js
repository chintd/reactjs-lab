import Expenses from './Expenses/Expenses';
import './App.css';
import Card from './Expenses/Card';
import ExpenseForm from './Expenses/ExpenseForm/ExpenseForm';
import Filter from './Expenses/Filter/Filter';
function App() {
  return (
    <div>    
      <ExpenseForm/>  
      <Card className="App">   
        <Filter/>
        <Expenses/>
      </Card>
    </div>
  );
}

export default App;
