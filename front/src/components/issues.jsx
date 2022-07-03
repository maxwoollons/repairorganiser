import React from 'react'
import { useState,useEffect } from 'react'


function issues() {
  const [issues, setIssues] = useState([])
  function deleteIssue(id) { 
    fetch(`http://localhost:8000/api/repairs/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(data => {
      location.reload()
    }
    )

  }





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
          let today = new Date()
          let dueDate = new Date(issue.requiredby)
          let diff = dueDate.getTime() - today.getTime()
          let days = Math.floor(diff / (1000 * 60 * 60 * 24))
          // console.log(days)
         
          if (days < 0) {
            return (
              <div className='issue-card' key={issue.idrepairs}>
                  <div className='issue-card-header issue-card-due'>
                      <h3><span className='issue-text'>{issue.idrepairs}: {issue.note} </span><br/>- by {issue.Date}</h3>
                      <button className='complete-btn'  onClick={() => deleteIssue(issue.idrepairs)}>Complete</button>
                   
                      </div>
                      
              </div>
            )
          } else if (days < 2) {
            return (
              <div className='issue-card' key={issue.idrepairs}>
                  <div className='issue-card-header issue-card-warning'>
                      <h3><span className='issue-text'>{issue.idrepairs}: {issue.note} </span><br/>- by {issue.Date}</h3>
                      <button className='complete-btn' onClick={() => deleteIssue(issue.idrepairs)}>Complete</button>
                      </div>
                      
              </div>
            )
          }
          else if (days > 2) {
            return (
              <div className='issue-card' key={issue.idrepairs}>
                  <div className='issue-card-header issuefine' >
                      <h3><span className='issue-text'>{issue.idrepairs}: {issue.note} </span><br/>- by {issue.Date}</h3>
                      <button className='complete-btn' onClick={() => deleteIssue(issue.idrepairs)}>Complete</button>
                      </div>
              </div>
            )
          }

      
        })}

    </div>
    </div>
  )
  
}

export default issues