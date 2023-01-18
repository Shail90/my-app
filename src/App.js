import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,HashRouter
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert= (message,type) =>{
    setalert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setalert(null);
      
    }, 2000);

  }

  const toggleMode= ()=>{
    if(mode=== 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
    <HashRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
      <Route exact path="/" element={<Form showAlert={showAlert} heading="Enter your text here:" mode={mode}/>}/>
      <Route exact path="/about" element={<About mode={mode}/>}/>
    </Routes>
    
    </div>
    </HashRouter>
    </>
  );
}

export default App;
