import React, { useState, useEffect, useRef } from "react";
import "../styles/App.css";
const App = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [formInput, setFormInput] = useState({
        email: "",
        password: "",
    });
    const [displayMsg, setDisplayMsg] = useState({
        emailMsg: "",
        passwordMsg: "",
    });
    const handleInputChange = (e) => {
        e.persist();
        // console.log(e.target, e.target.id, e.target.value);
        if (e.target.id === "inputEmail") {
            setFormInput((state) => {
                return {
                    ...state,
                    ["email"]: e.target.value,
                };
            });
        } else {
            setFormInput((state) => {
                return {
                    ...state,
                    ["password"]: e.target.value,
                };
            });
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formInput.email === "") {
            emailRef.current.focus();
            setDisplayMsg({
                emailMsg: "",
                passwordMsg: "",
            });
        } else if (formInput.password === "") {
            passwordRef.current.focus();
            setDisplayMsg({
                emailMsg: "",
                passwordMsg: "",
            });
        } else {
            setDisplayMsg({
                emailMsg: formInput.email,
                passwordMsg: formInput.password,
            });
            setFormInput({
                email: "",
                password: "",
            });
        }
    };
    //code here

    return (
        <div id="main">
            Email
            <input
                id="inputEmail"
                type="text"
                value={formInput.email}
                ref={emailRef}
                onChange={handleInputChange}
            />
            <br />
            Password
            <input
                id="inputPassword"
                type="text"
                value={formInput.password}
                ref={passwordRef}
                onChange={handleInputChange}
            />
            <br />
            <button id="submitButton" onClick={handleSubmit}>
                Submit
            </button>
            <br />
            <p id="emailText">Your Email : {displayMsg.emailMsg}</p>
            <p id="passwordText">Your Password : {displayMsg.passwordMsg}</p>
        </div>
    );
};

export default App;
