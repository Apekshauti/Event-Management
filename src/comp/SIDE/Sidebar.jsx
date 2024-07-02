import React, { useState } from 'react';
import { FaTh, FaChalkboard, FaUsers, FaBookOpen, } from 'react-icons/fa';
import { GiProgression } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import './App.css'; 

const Sidebar = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaTh size={30}/>
        },
        {
            path: "/eventpage",
            name: "EventPage",
            icon: <FaBookOpen size={30}/>
        },
        
        {
            path: "/eventparticipation",
            name: "EventParticipation",
            icon: <FaUsers size={30}/>
        },
        {
            path: "/summarypage",
            name: "ProfilePage",
            icon: <GiProgression size={30}/>
        },
    ];

    return (
        <div style={{maxWidth:'100%',padding:'0%' ,textDecoration: 'none'}} className="container">
            <div
                className={`sidebar ${isHovered ? 'expanded' : 'collapsed'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} className="menu-item" activeClassName="active">
                        <div className="icon">{item.icon }</div>
                        <div style={{ display: isHovered ? "block" : "none" ,textDecoration: 'none'}} className="link-text">{item.name}</div>
                    </NavLink>
                ))}
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
