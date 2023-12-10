import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ element, ...rest }) {
  return (
    <Route
      {...rest}
      element={
        localStorage.getItem('loggedIn') ? element : <Navigate to='/login' />
      }
    />
  );
}

export default ProtectedRoute;
