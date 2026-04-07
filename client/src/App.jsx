import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Feed from './pages/Feed';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="messages/:userId" element={<Messages />} />
        <Route path="/profile" element={<Profile />} /> 
      </Routes>
    </>
  );
}

export default App;
