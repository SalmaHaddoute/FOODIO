import React, { useState } from 'react';
import './Login.css';
import { assets } from '../../assets/assets';

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('Login'); // Manage local state for Login/Sign Up toggle

  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>

        <div className="login-popup-input">
            {currState === 'Sign Up' && <input type="text" placeholder="Your name" required />}
            <input type="email" placeholder="Your email" required />
            <input type="password" placeholder="Your password" required />
            </div>

            <button type="submit">
            {currState === 'Sign Up' ? 'Create account' : 'Login'}
            </button>

            <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the Terms of Use & Privacy Policy</p>
            </div>

            {currState === 'Login' ? (
            <p>
                Create a new account{' '}
                <span onClick={() => setCurrState('Sign Up')} className="toggle-link">
                Click Here
                </span>
            </p>
            ) : (
            <p>
                Already have an account?{' '}
                <span onClick={() => setCurrState('Login')} className="toggle-link">
                Login here
                </span>
            </p>
            )}
        </form>
        </div>
    );
};

export default LoginPopUp;
