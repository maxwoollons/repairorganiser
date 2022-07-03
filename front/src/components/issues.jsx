import React from 'react'
import { useState,useEffect } from 'react'
import 'remixicon/fonts/remixicon.css'


function issues() {
  const [issues, setIssues] = useState([])
  function deleteIssue(id) { 
    fetch(`http://localhost:8000/api/repairs/archive/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(data => {
      // console.log(data[0])
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
        <a href='/shipping'><button className='navbtn'>Dispatch</button></a>
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
              <div className='issue-card' key={issue.id}>
                  <div className='issue-card-header issue-card-due'>
                      <h3><span className='issue-text'>{issue.idrepairs}: {issue.note} </span><br/><small>- by {issue.Date}</small></h3>
                      <button className='complete-btn'  onClick={() => deleteIssue(issue.id)}>Complete</button>
                   
                      </div>
                      
              </div>
            )
          } else if (days < 2) {
            return (
              <div className='issue-card' key={issue.id}>
                  <div className='issue-card-header issue-card-warning'>
                      <h3><span className='issue-text'>{issue.idrepairs}: {issue.note} </span><br/><small>- by {issue.Date}</small></h3>
                      <button className='complete-btn' onClick={() => deleteIssue(issue.id)}>Complete</button>
                      </div>
                      
              </div>
            )
          }
          else if (days > 2) {
            return (
              <div className='issue-card' key={issue.id}>
                  <div className='issue-card-header issuefine' >
                      <h3><span className='issue-text'>{issue.idrepairs}: {issue.note} </span><br/><small>- by {issue.Date}</small></h3>
                      <button className='complete-btn' onClick={() => deleteIssue(issue.id)}>Complete</button>
                      </div>
              </div>
            )
          }

      
        })}

    </div>
    <a href="/archived"><button className="archivedbtn"><i className="ri-archive-line"> </i>archived issues</button></a>
    </div>
  )
  
}

export default issues