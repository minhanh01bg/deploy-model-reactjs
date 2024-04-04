import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Layout from './pages/Layout';
import Blogs from './pages/Blogs';
import Login from './pages/Login';
import PrivateRoute from './routes/PrivateRoute';
import ProtectedRoutes from './routes/ProtectedRoutes';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/' element={<Layout/>}>
        <Route path='*' element={
          <PrivateRoute>
            <ProtectedRoutes />
          </PrivateRoute>} 
          />
        
      </Route>
      
    </Routes>
  );
}

export default App;
