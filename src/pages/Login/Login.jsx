import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signup } from "../../firebase";
import netflix_spinner from "../../assets/netflix_spinner.gif";

const Login = () => {
  const [authstate, setAuthState] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_authentication = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (authstate === "signup") {
      await signup(email, password);
    } else {
      await login(email, password);
    }
    setLoading(false);
  };
  return loading ? (
    <div className="login-spinner">
      <img src={netflix_spinner} alt="loading gif" />
    </div>
  ) : (
    <div className="login">
      <img className="logo" src={logo} alt="netflix logo" />
      <div className="login-form">
        <h1>{authstate === "signup" ? "Sign Up" : "Sign in"}</h1>
        <form>
          <input
            type="text"
            placeholder="Please enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button onClick={user_authentication} type="submit" id="signin-btn">
            {authstate === "signup" ? "Sign Up" : "Sign In"}
          </button>
          {authstate === "login" && (
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
              {authstate === "signup" ? (
                <p>
                  Already have an account?
                  <span
                    onClick={() => {
                      setAuthState("login");
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
                      setAuthState("signup");
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
