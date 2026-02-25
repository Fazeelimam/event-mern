import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function Auth() {
  let auth = localStorage.getItem('jwt');
  return auth ? <Outlet /> : <Navigate to="/login" />;
}
