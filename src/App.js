import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [buttonStyle, setButtonStyle] = useState({
    backgroundColor: 'black',
    color: 'white'
  });

  const colorChange = (color) => {
    document.body.style.backgroundColor = color;
    setButtonStyle({
      backgroundColor: color
    });
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#383838';
      setButtonStyle({
        backgroundColor: 'white',
        color: 'black'
      });
      showAlert("Dark Mode has been Enabled", 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setButtonStyle({
        backgroundColor: 'black',
        color: 'white'
      });
      showAlert("Light Mode has been Enabled", 'success');
    }
  };

  return (
    <>
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} colorChange={colorChange} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextForm heading="Enter Your Text to Analyze" mode={mode} buttonStyle={buttonStyle} showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>
    {/* <Navbar mode={mode} toggleMode={toggleMode} colorChange={colorChange} />
    <Alert alert={alert} /> */}
    {/* <div className="container my-3">
      <About/>
      <TextForm heading="Enter Your Text to Analyze" mode={mode} buttonStyle={buttonStyle} showAlert={showAlert} />
    // </div> */}
    </>
  );
}


// always use exact path
export default App;
