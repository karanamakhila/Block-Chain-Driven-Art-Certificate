import React from "react";
import {Navigate} from "react-router-dom";
import { useUSerAuth } from "../context/UserAuthContext";

const ProtectedRoute =({children}) =>{
    const {user}=useUSerAuth();
    if(!user){
        return <Navigate to="/"/>;
    }
    return children;
};

export default ProtectedRoute;