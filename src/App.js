import { useState } from 'react'
import './App.css';
import runLogic from './logic'

function App() {
  const [value,setValue] = useState("");
  
  const handleChange = (event) => {
    setValue(event.target.value)
  } 
  
  return (
    <div className="app">
      <div className="app__top">
        <h1>Преобразователь строки</h1>
        <input className="input--default" placeholder="enter text" value={value} onChange={ handleChange }/>  
      </div>
      <div className="app__bottom">
        <h4>result:</h4>
        <p>{runLogic(value)}</p>
      </div>
    </div>
  );
}

export default App;
