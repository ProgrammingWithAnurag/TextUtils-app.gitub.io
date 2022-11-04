
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled","sucess")
      document.title = "TextUtils - Dark Mode";
      setInterval(() =>{
        document.title = "TextUtils is Amazing Mode";
      },2000);
      setInterval(() =>{
        document.title = "TextUtils is install  Now";
      },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","sucess")
      document.title = "TextUtils - light Mode";
    }
  }
  return (
    <>
    {/* <Router> */}
     <Navbar title="TextUtills" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className='container my-3'>
      {/* <Switch> */}
          {/* <Route exact path="/about">
            <About/>
          </Route> */}
          {/* <Route exact path="/"> */}
            <TextForm heading="Enter the text to anlayze" mode={mode}/>
          {/* </Route> */}
      {/* </Switch> */}
     </div>
     {/* </Router> */}
    </>
  );
}

export default App;
