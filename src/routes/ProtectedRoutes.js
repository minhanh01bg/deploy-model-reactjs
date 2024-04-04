import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Blogs from '../pages/Blogs';

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path='home' element={<Home />} />
      <Route path="blogs" element={<Blogs />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default ProtectedRoutes;