import './login.css';
import { FaUser, FaLock } from "react-icons/fa";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login_form = () => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
    const [userRole, setUserRole] = useState(""); // State to track user role
    const navigate = useNavigate(); // Initialize useNavigate hook

    // Define the list of users and passwords
    const users = [
        { username: "apeksha", password: "apeksha@123", role: "teacher" },
        { username: "arya", password: "arya@123", role: "student" },
        { username: "anushka", password: "anushka@123", role: "teacher" },
        { username: "sanika", password: "sanika@123", role: "student" },
        { username: "srinivas", password: "srinivas@123", role: "student" }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if the entered username and password match any user
        const matchedUser = users.find(u => u.username === user && u.password === pass);
        if (matchedUser) {
            // Set login status to true
            setIsLoggedIn(true);
            // Set user role
            setUserRole(matchedUser.role);
            // Navigate to header with user role
            navigate(`/header/${matchedUser.role}`);
        } else {
            // Show popup for invalid login
            setShowPopup(true);
        }
    };

    return (
        <div className='wrapper' style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            {!isLoggedIn && ( // Render login form if not logged in
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type='text' placeholder='Username' value={user} onChange={(e) => setUser(e.target.value)} required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type='password' placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)} required />
                        <FaLock className='icon' />
                    </div>
                    <button type="submit">Login</button>
                </form>
            )}
            {/* Popup for invalid login */}
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={() => setShowPopup(false)}>&times;</span>
                        <p>Invalid username or password. Please try again.</p>
                    </div>
                </div>
            )}
            {isLoggedIn && ( // Render toggle bar if logged in
                <div className="toggle-bar">
                    <p>Successfully signed in as {user}</p>
                    <p>Role: {userRole}</p>
                    <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                </div>
            )}
        </div>
    )
}

export default Login_form;