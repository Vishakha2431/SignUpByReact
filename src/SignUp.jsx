import React, { useState } from 'react';

export default function SignUp() {

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);

  const [currPass, setCurrPass] = useState("");
  const [currPassError, setCurrPassError] = useState(null);

  // Email Validation

  function validEmail(value) {

    if (
      value.includes("@") &&
      value.includes(".") &&
      value.indexOf("@") > 0 &&
      value.indexOf(".") > value.indexOf("@")
    ) {
      setEmailError(false);
    }
    else {
      setEmailError(true);
    }
  }

  // Password Validation

  function validPassword(value) {

    if (value.length >= 8) {
      setPasswordError(false);
    }
    else {
      setPasswordError(true);
    }
  }

  // Current Password Validation

  function validCurrPass(value, pass) {

    if (value === "") {
      setCurrPassError(null);
    }
    else if (value === pass) {
      setCurrPassError(false);
    }
    else {
      setCurrPassError(true);
    }
  }

  // Submit Function

  function handleSubmit(e) {

    e.preventDefault();

    if (
      emailError ||
      passwordError ||
      currPassError ||
      email === "" ||
      password === "" ||
      currPass === ""
    ) {
      alert("Can't submit the form");
    }
    else {
      alert("Form submitted successfully");
    }
  }

  return (

    <div id='signup-container'>

      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>

        {/* Email */}

        <label htmlFor="email">
          Email
        </label>

        <input
          type="text"
          id='email'

          value={email}

          onChange={(e) => {
            setEmail(e.target.value);
            validEmail(e.target.value);
          }}

          style={{
            border:
              emailError === null
                ? "2px solid gray"
                : emailError
                ? "2px solid red"
                : "2px solid green"
          }}
        />

        {
          emailError && (
            <p style={{ color: "red" }}>
              Enter Valid Email
            </p>
          )
        }

        {/* Password */}

        <label htmlFor="password">
          Password
        </label>

        <input
          type="password"
          id='password'

          value={password}

          onChange={(e) => {

            setPassword(e.target.value);

            validPassword(e.target.value);

            validCurrPass(currPass, e.target.value);
          }}

          style={{
            border:
              passwordError === null
                ? "2px solid gray"
                : passwordError
                ? "2px solid red"
                : "2px solid green"
          }}
        />

        {
          passwordError && (
            <p style={{ color: "red" }}>
              Password must be at least 8 characters
            </p>
          )
        }

        {/* Current Password */}

        <label htmlFor="currPass">
          Current Password
        </label>

        <input
          type="password"
          id="currPass"

          value={currPass}

          onChange={(e) => {

            setCurrPass(e.target.value);

            validCurrPass(e.target.value, password);
          }}

          style={{
            border:
              currPassError === null
                ? "2px solid gray"
                : currPassError
                ? "2px solid red"
                : "2px solid green"
          }}
        />

        {
          currPassError && (
            <p style={{ color: "red" }}>
              Password and Current Password should be same
            </p>
          )
        }

        <button type='submit'>
          Sign Up
        </button>

      </form>

    </div>
  )
}