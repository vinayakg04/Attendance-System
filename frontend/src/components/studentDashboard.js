
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/studentAction';
import { Navigate } from "react-router-dom";


const StudentDashboard = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        < Navigate to="/" replace/> 
    }

    return(
        <div>
        <h1 style={{color:'black',top:"40px",left:"90px",position:"absolute"}}>Welcom To student-Dashboard Attendence Page.....</h1>
        <button 
            style={{
             position: 'absolute',
             width:"7%",
             top: '80px', 
            right: '120px', 

               }}
        onClick={handleLogout}><h2>Logout</h2></button>
     </div>
    )

};

export default StudentDashboard;