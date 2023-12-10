import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  async function signUp(e) {
    e.preventDefault();
    let requestBody = { firstName, lastName, userName, email, password };

    //resolve first promise using await
    let response = await fetch('http://localhost:8080/api/v1/users/user/add',{
       method: 'POST',
       headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
       },
       body:JSON.stringify(requestBody)
    });
    //resolve second promise using await
    response = await response.json();
  }
  return (
    <>
      <form onSubmit={signUp}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input type="text" className="form-control" onChange={(e) => setFirstName(e.target.value)} placeholder="First name" />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" onChange={(e) => setLastName(e.target.value)} placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>User name</label>
          <input type="text" className="form-control" onChange={(e) => setUserName(e.target.value)} placeholder="User name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control w-100" onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </div>
        <p className="forgot-password text-right">
          Already registered <Link to="/login">sign in?</Link>
        </p>
      </form>
    </>
  )
}
