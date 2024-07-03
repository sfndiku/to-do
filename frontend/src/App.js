// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes ,Navigate } from 'react-router-dom';
import Signup from './components/Signup.js';
import Signin from './components/Signin.js';
import EmailAuth from './components/EmailAuth.js';
import Todos from './components/Todos.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <>Hello</>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/email-auth" element={<EmailAuth/>} />
        <Route path="/todos" element={<Todos/>} />
      </Routes>
    </Router>
  );
};

export default App;