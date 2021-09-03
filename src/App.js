import React, {useState} from "react";
import Form from './components/Form.jsx';
import logo from './logo.svg';
import './App.css';
import Registration from "./components/Registration.jsx";

function App() {
  const [ state, setState] = useState ({
    firstName: "",
    lastName: "",
    email:"",
    password:"",
    confirmPassword:""
  });
  return (
    <div className="App">
      <Registration />
      {/* <Form inputs={state} setInputs={setState} /> */}
    </div>
  );
}

export default App;
