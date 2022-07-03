import React from 'react'
import { useState,useEffect } from 'react'
import 'remixicon/fonts/remixicon.css'
import Navbar from './navbar'



function issues() {
  const [loginStatus, setLoginStatus] = useState('False')
  const [issues, setIssues] = useState([])


  function fetchIssues() {
    fetch("http://localhost:8000/api/repairs/all")
    .then(res => res.json())
    .then(data => {
        setIssues(data)
        if (data.length === 0) {
        console.log("No issues")
      }
  })
  }




  useEffect(() => {
    fetch('http://localhost:8000/api/login').then(res => res.json())
    .then(data => {
      if(data.username){
        setLoginStatus("True")
        fetch("http://localhost:8000/api/repairs/all")
        .then(res => res.json())
        .then(data => {
            setIssues(data)
            if (data.length === 0) {
            console.log("No issues")
          }
      })
      }
      else{
        setLoginStatus("False")
      }
      
      
    }

    )


    
      
  }, [])
  
  
 



  // console.log(loginStatus)

  if(loginStatus === "True"){
    
   
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

   
  
  
  
  
  

  
  
    return (
      <>
      <Navbar/>
      
      <div className='container'>
      

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
      </>
    )
  } else {
    function login(e){
      e.preventDefault()
      let details = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
      }
      fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'SameSite': 'None'
          
        },
        body: JSON.stringify(details)
      }).then(res => res.json())
      .then(data => {
        if(data.user){
          setLoginStatus(true)
        }
      }
      )

    }



    return (
      // login area
      <div>
        <h1 className='logintitle'>You are restricted from entering!</h1>
        <div className="formcontainer">
        <h2>Please Login</h2>
        <form onSubmit={(e)=>login(e)}>
          <label htmlFor="username">Username</label>
          <input id='username' type="text" placeholder="Username" name="username"/>
          <label htmlFor='password'>Password</label>
          <input id="password" type="password" placeholder="Password" name="password" />
          <button type="submit" className='submitbtn'>Login</button>
        </form>
        </div>
      </div>
        )
  }




  
  }



export default issues