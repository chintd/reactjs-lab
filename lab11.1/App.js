
import UserFinder from "./components/UserFinder"
import './App.css';
import UserContext from './components/user-context';
const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];


function App() {
 const userArray = {
  users: DUMMY_USERS
 }
  return (
    <UserContext.Provider value={userArray}>
    <UserFinder/>
    </UserContext.Provider >
  );

}

export default App;
