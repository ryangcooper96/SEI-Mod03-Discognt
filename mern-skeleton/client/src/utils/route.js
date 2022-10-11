import React from "react";
import { Navigate } from "react-router-dom";
import useUser from "../hooks/useUser";

export const ProtectedRoute = ({ children }) => {
  const { user } = useUser();
  console.log(user);
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
