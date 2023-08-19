import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import { Route,Routes } from 'react-router-dom';
import Login from './Components/Login';
import Profile from './Components/Profile';

function App() {

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
