import { useState } from 'react'
import './App.css'
import Issues from './components/issues.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <div className='container'>
      <Issues/>
    </div>
    </div>
  )
}

export default App
