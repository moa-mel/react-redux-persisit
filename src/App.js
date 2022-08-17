import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Home from "./pages/Home";
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'


function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  return (
    <Router>
    <Routes>
    <Route exact path="/" element={
      isLoggedIn 
      ? <Home/> 
      : <Navigate to='/signin'/>
    } />
    <Route path="signin" element={
      !isLoggedIn 
      ? <Login/> 
      : <Navigate to='/'/>
    } />
    </Routes>
    </Router>
  );
}

export default App;
