import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="login">
      <img className="logo" src={logo} alt="netflix logo" />
      <div className="login-form">
        <h1>{isSignUp ? "Sign Up" : "Sign in"}</h1>
        <form>
          <input type="text" placeholder="Email or mobile number" />
          <input type="password" placeholder="Password" />
          <button type="submit" id="signin-btn">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
          {!isSignUp && (
            <>
              <p class="selection-text">OR</p>
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
              {isSignUp ? (
                <p>
                  Already have an account?
                  <span
                    onClick={() => {
                      setIsSignUp(!isSignUp);
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
                      setIsSignUp(!isSignUp);
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
