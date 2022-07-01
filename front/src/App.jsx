import { useState } from 'react'
import './App.css'
import Issues from './components/issues.jsx'
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
    <div className='container'>

      <Issues/>
    </div>
    </div>
  )
}

export default App
