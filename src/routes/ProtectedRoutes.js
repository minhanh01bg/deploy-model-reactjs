import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Blogs from '../pages/Blogs';
import Table from '../pages/Table';
import Example from '../pages/Example';
const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path='home' element={<Home />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="tables" element={<Table />} />
      <Route path="example" element={<Example />} />
      
    </Routes>
  );
};

export default ProtectedRoutes;