import React from 'react'
import "../App.css"



function navbar() {
  var today = new Date(),
      date =  today.getDate()  + '-' + (today.getMonth() + 1) + "-" + today.getFullYear()


  return (
    <nav className='navbar'>
    <div className="navitem">Home</div>
    <div className="navitem">Add Issue</div>
    <div>{date}</div>
    </nav>
  )
}

export default navbar