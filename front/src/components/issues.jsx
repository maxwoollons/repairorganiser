import React from 'react'
import { useState,useEffect } from 'react'

function issues() {
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
        <h1>Current Issues</h1>
    </div>
    <div className='issues-body'>
        {issues.map(issue => {
            return (
                <div className='issue-card' key={issue.idrepairs}>
                    <div className='issue-card-header'>
                        <h1>{issue.idrepairs}</h1>
                        </div>
                        <div className='issue-card-body'>
                         <p>{issue.note}</p>
                         <p>by {issue.Date}</p>
                        </div>
                  </div>
            )
        })}

    </div>
    </div>
  )
  
}

export default issues