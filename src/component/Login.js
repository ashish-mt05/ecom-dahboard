import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState();
  async function login(e) {
    e.preventDefault();
    let requestBody = { userName, password };

    //resolve first promise using await
    let response = await fetch('http://localhost:8080/api/v1/users/user/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(requestBody)
    });
    //resolve second promise using await
    response = await response.json();
    console.log(response);
  }
  return (
    <>
      <form onSubmit={login}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>User Name</label>
          <input type="text" className="form-control" onChange={(e) => setUserName(e.target.value)} placeholder="user name"/>
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Enter password"/>
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1"/>
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <Link to="/forgotpassword">password?</Link>
        </p>
      </form>
    </>
  )
}
