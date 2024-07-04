// frontend/src/components/Signin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const Signin = () => {
  const Navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
//   const handleSignin = async (e) => {
//     e.preventDefault();
//     const response = await fetch('/api/auth/signin', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//     });
//     const data = await response.json();
//     console.log(data);
//   } ;
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSignupRedirect = () => {
        Navigate('/signup');
    };

  return (
    <div className='container'>
      <h2>Signin</h2>
      <form>
        <input 
          type='email'
          placeholder="Email" 
        //   value={email} 
        //   onChange={(e) => setEmail(e.target.value)} 
        />
        <div className='password-container'>
            <input 
              type={showPassword ? "text" : "password"}  
              placeholder="Password" 
            //   value={password} 
            //   onChange={(e) => setPassword(e.target.value)} 
            />
            <FontAwesomeIcon 
                icon={showPassword ? faEye : faEyeSlash} 
                className="toggle-password" 
                onClick={togglePasswordVisibility} 
            />
        </div>
        <button type="submit">Signin</button>

        <p>
            Not a user? <span className="signup-link" onClick={handleSignupRedirect}>Signup</span>
        </p>
      </form>
    </div>
  );
};

export default Signin;
