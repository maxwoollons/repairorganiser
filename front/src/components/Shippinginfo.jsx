import React from 'react'
import { useState,useEffect } from 'react'

function shippinginfo() {
  const [issues, setIssues] = useState([])
useEffect(() => {
  fetch("http://localhost:8000/api/repairs/all")
  .then(res => res.json())
  .then(data => {
      setIssues(data)
      console.log(data)
      if (data.length === 0) {
        console.log("No issues")
      }
  })
}, [])

  return (
    <div className='issues'>
    <div className='issues-header'>
        <a href='/'><button className='navbtn'>Issues</button></a>
        <a href='/shipping'><button className='navbtn'>Tv Shipping</button></a>
    </div>
    <div className='issues-body'>
        {issues.map(issue => {
            return (
                <div className='issue-card' key={issue.idrepairs}>
                    <div className='issue-card-header'>
                        <h3><span className='issue-text'>{issue.idrepairs}: {issue.note} </span><br/>- by {issue.Date}</h3>
                        <button className='complete-btn'>Complete</button>
                     
                        </div>
                        
                  </div>
            )
        })}

    </div>
    </div>
  )
  
}

export default shippinginfo