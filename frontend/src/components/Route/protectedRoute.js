import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({user,loading, isAuthenticated,children }) => {  

       if (!isAuthenticated || !user) {
        return < Navigate to="/" replace/>; 
      }
      < Navigate to="/" replace/>
      return children;
           
};

export default ProtectedRoute;