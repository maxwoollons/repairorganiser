import { useState } from 'react'
import '../App.css'
import Shippinginfo from './Shippinginfo';
import { BrowserRouter } from "react-router-dom";
import Navbar from './navbar';


function Shipping() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
    <div className='container'>

      <Shippinginfo/>
    </div>
    </div>
  )
}

export default Shipping
