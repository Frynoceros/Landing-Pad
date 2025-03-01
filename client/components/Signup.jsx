import styles from '../styles/login-styles.scss';
import React, {useRef} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import {useDispatch} from 'react-redux';
import {logIn} from '../actions/actions.js';

const Signup = (props) => {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const zipRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () =>
    fetch('/signup/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userNameRef.current.value,
        password: passwordRef.current.value,
        firstname: firstNameRef.current.value,
        lastname: lastNameRef.current.value,
        email: emailRef.current.value,
        zip: zipRef.current.value,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data !== 'Rejected') {
          dispatch(logIn(data));
          navigate('../', {replace: true});
        } else {
          window.alert('Incorrect info');
        }
      });

  return (
    <main id="signupMainContainer">
      <h1>Sign up</h1>

      <div id="signupContainer">
        <div className="log-in-sec">
          <label type="text">Username: </label>
          <input type="text" placeholder="Type here" ref={userNameRef} />
        </div>
        <div className="log-in-sec">
          <label type="text">Password: </label>
          <input type="password" placeholder="Type here" ref={passwordRef} />
        </div>
        <div className="log-in-sec">
          <label type="text">First Name: </label>
          <input type="text" placeholder="Type here" ref={firstNameRef} />
        </div>
        <div className="log-in-sec">
          <label type="text">Last Name: </label>
          <input type="text" placeholder="Type here" ref={lastNameRef} />
        </div>
        <div className="log-in-sec">
          <label type="text">E-Mail: </label>
          <input type="text" placeholder="Type here" ref={emailRef} />
        </div>
        <div className="log-in-sec">
          <label type="text">Zip: </label>
          <input type="text" placeholder="Type here" ref={zipRef} />
        </div>
        <button className="submit-btn" onClick={handleSubmit}>
          Sign-Up
        </button>
      </div>
    </main>
  );
};

export default Signup;
