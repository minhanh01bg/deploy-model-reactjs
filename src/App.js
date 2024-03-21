import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Layout from './pages/Layout';
import Blogs from './pages/Blogs';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/' element={<Layout/>}>
        <Route path='home' element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
      </Route>
      
    </Routes>
  );
}

export default App;
