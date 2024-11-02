import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css'; // Import your CSS file

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const registerBtnRef = useRef(null);
  const loginBtnRef = useRef(null);

  const toggleForm = () => {
    setSignIn(!isSignIn);
  };

    const change = () => {
    const registerBtn = registerBtnRef.current;
    const loginBtn = loginBtnRef.current;

    registerClickHandler();
  loginBtn.addEventListener('click', loginClickHandler);

  loginClickHandler();
  registerBtn.addEventListener('click', registerClickHandler);

  };

  const registerClickHandler = () => {
    const containerr = document.querySelector('.container');

    containerr.classList.add('active');
    setSignIn(isSignIn);
  };

  const loginClickHandler = () => {
    const containerr = document.querySelector('.container');

    containerr.classList.remove('active');
    setSignIn(!isSignIn);
  };
  useEffect(() => {
    const registerBtn = registerBtnRef.current;
    const loginBtn = loginBtnRef.current;
    registerBtn.addEventListener('click', change);

    // Clean up the event listener when the component unmounts
    return () => {
      registerBtn.removeEventListener('click', change);
      loginBtn.removeEventListener('click', loginClickHandler);
    };
  }, []);



  return (
    <div className="body">
    <div id="container" className="container">
      <div className={`form-container ${isSignIn ? 'sign-in' : 'sign-up'}`}>
        <form>
          {isSignIn ? (
            <>
              <h1>Sign In</h1>
              <div className="social-icons">
                <Link href="#" className="icon">
                  <i id="google" className="fa-brands fa-google-plus-g"></i>
                </Link>
                <Link href="#" className="icon">
                  <i id="facebook" className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link href="#" className="icon">
                  <i id="git" className="fa-brands fa-github"></i>
                </Link>
                <Link href="#" className="icon">
                  <i id="linkedin" className="fa-brands fa-linkedin-in"></i>
                </Link>
              </div>
              <span>or use your email password</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <Link href="#">Forget Your Password?</Link>
              <Link className="btt" to="/shop"><button>Sign In</button></Link>
            </>
          ) : (
            <>
              <h1>Create Account</h1>
              <div className="social-icons">
                <Link href="#" className="icon">
                  <i id="google" className="fa-brands fa-google-plus-g"></i>
                </Link>
                <Link href="#" className="icon">
                  <i id="facebook" className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link href="#" className="icon">
                  <i id="git" className="fa-brands fa-github"></i>
                </Link>
                <Link href="#" className="icon">
                  <i id="linkedin" className="fa-brands fa-linkedin-in"></i>
                </Link>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button >Sign Up</button>
            </>
          )}
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div
            className={`toggle-panel toggle-left ${isSignIn ? 'active' : ''}`}
          >
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="hidden" id="login" onClick={toggleForm} ref={loginBtnRef} >
              Sign In
            </button>
          </div>
          <div
            className={`toggle-panel toggle-right ${!isSignIn ? 'active' : ''}`}
          >
            <h1>Hello, Friend!</h1>
            <p>If you don't have account you can sign up here !</p>
            <button onClick={toggleForm} ref={registerBtnRef} >Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;