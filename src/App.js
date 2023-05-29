import Auth from './components/Auth';
import './App.css';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';
import Counter from "./components/Counter"
function App() {
  const isLogin = useSelector(state=>state.auth.isLogin)
  return (
    <div className="App">
      <Header/>
      {!isLogin && <Auth/>}
      {isLogin && <UserProfile/>}
      <Counter/>
    </div>
  );
}

export default App;
