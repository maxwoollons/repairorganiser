import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navbar from './components/navbar.jsx'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Shipping from './components/Shipping.jsx'
import Addissue from './components/addissue.jsx'
import Archived from './components/archived.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/shipping' element={<Shipping/>}/>
      <Route path='/addissue' element={<Addissue/>}/>
      <Route path='/archived' element={<Archived/>}/>
        
    </Routes>
   
  </BrowserRouter>
)
