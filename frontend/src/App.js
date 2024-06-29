// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import EmailAuth from './components/EmailAuth';
import Todos from './components/Todos';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/email-auth" component={EmailAuth} />
        <Route path="/todos" component={Todos} />
      </Routes>
    </Router>
  );
};

export default App;
