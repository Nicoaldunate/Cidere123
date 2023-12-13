import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Login from './pages/login';
import Profile from './pages/profile';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('http://localhost:5000/status', {
          credentials: 'include', // Include the session cookie
        });

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Failed to check auth:', error);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Show a loading screen while the auth status is being fetched
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route
          path='/profile/:username'
          element={isAuthenticated ? <Profile /> : <Navigate to='/login' />}
        />
      </Routes>
    </Router>
  );
}

export default App;
