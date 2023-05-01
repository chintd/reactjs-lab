import AddUser from './components/AddUser';
import UserList from './components/UserList';

import './App.css';
import  { useState } from 'react'; 
 
function App() {
  const [user, setUser] = useState([{id:1, username: "anhnd", age:20}]);
  function addUserHandler (enteredUser){
    const userAdded = {
      id: Math.random().toString(),
      ...enteredUser
    }
    setUser([userAdded, ...user])
  }
  
  return (<>   
     <AddUser onAddUser={addUserHandler}/>
     <UserList items={user}/>
    </>
  );
}

export default App;
