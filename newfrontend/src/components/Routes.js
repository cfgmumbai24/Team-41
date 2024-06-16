import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import UserAdmin from '../useradmin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/useradmin" element={<UserAdmin />} />
      </Routes>
    </Router>
  );
};

export default App;
