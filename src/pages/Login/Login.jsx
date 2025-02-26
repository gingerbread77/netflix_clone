import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signup, logout } from "../../firebase";

const Login = () => {
  const [authstate, setAuthState] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user_authentication = async (e) => {
    e.preventDefault();
    if(authstate === 'signup'){
      await signup(email,password);
    } else {
      await login(email,password);
    }
  }
  return (
    <div className="login">
      <img className="logo" src={logo} alt="netflix logo" />
      <div className="login-form">
        <h1>{authstate === 'signup' ? "Sign Up" : "Sign in"}</h1>
        <form>
          <input type="text" placeholder="Email or mobile number" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <button onClick={user_authentication} type="submit" id="signin-btn">
            {authstate === 'signup' ? "Sign Up" : "Sign In"}
          </button>
          {authstate === 'login' && (
            <>
              <p className="selection-text">OR</p>
              <button type="button" id="btn-gray">
                Use a sign-in code
              </button>
              <a href="#" id="forget">
                Forgot password?
              </a>
            </>
          )}
          <div className="help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div className="signup-text">
              {authstate === 'signup' ? (
                <p>
                  Already have an account?
                  <span
                    onClick={() => {
                      setAuthState('login');
                    }}
                  >
                    Sign in now.
                  </span>
                </p>
              ) : (
                <p>
                  New to Netflix?
                  <span
                    onClick={() => {
                      setAuthState('signup');
                    }}
                  >
                    Sign up now.
                  </span>
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
