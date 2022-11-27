//import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Navbar from './Navbar';
import Contain from './Contain';



function App() {
  const[mode,setMode]=useState('light');
  const changemode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.background='grey';
    }
  else{
    setMode('light');
    document.body.style.background='white';
  }
  }
  return (
   <>
    <Navbar mode={mode} changemode={changemode} />
    <div className="container">
    <Contain mode={mode}/>
    </div>

   </>
  );
}

export default App;
