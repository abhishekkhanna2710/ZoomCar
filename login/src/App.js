import logo from './logo.svg';
import './App.css';
import LogInFirst from "./LogInFirst";
import SignUp from "./SignUp";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LogInFirst/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
