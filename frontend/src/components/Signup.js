// frontend/src/components/Signup.js
import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     const response = await fetch('/api/auth/signup', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//     });
//     const data = await response.json();
//     console.log(data);
//};

  return (
    <div className='container'>
      <h2>Signup</h2>
      <form>
        <input 
          type="email" 
          placeholder="Email" 
        //   value={email} 
        //   onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
        //   value={password} 
        //   onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;