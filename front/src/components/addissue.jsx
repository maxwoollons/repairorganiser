import React from 'react'
import Navbar from './navbar'
import "../App.css"

const addissue = () => {
    function onSubmit(e){
        e.preventDefault();
        fetch('http://localhost:8000/api/repairs/add',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    idrepairs: e.target.repairid.value,
                    note: e.target.issue.value,
                    requiredby: e.target.date.value,
                    tdc: e.target.tdc.value
    
       
                })
                }).then(res => res.json())
                .then(data => {
                    console.log(data)
                }
                )

    }



  return (
    <div>
        <Navbar/>
        <div className='issuecontainer'>
        <h1>Add Issue</h1>
        <form onSubmit={onSubmit} method="POST">
        <label>Solvup ID:</label>
        <input type="text" name="repairid" placeholder="Solvup Case ID"/>
        <label>Issue description:</label>
        <input type="text" name="issue" placeholder="Enter Issue"/>
        <label>Required By:</label>
        <input type="date" name="date"/>
        <label>TDC:</label>
        <input type="text" name="tdc" placeholder="Enter TDC"/>
        <input className='submit' type="submit" value="Submit"/>
        </form>
        </div>
    </div>
  )
}

export default addissue