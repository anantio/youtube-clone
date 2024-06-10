import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return <div>{isAuthenticated ? <Outlet /> : <Navigate to="/" />}</div>;
};

export default ProtectedRoutes;
