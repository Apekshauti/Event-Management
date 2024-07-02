import React, { useState } from 'react';
import { FaBars,FaTh, FaChalkboard,FaUsers,FaBookOpen} from 'react-icons/fa'; 
import { NavLink } from 'react-router-dom';
import './App.css';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon:<FaTh/>
        },
        {
            path: "/eventpage",
            name: "EventPage",
            icon:<FaBookOpen/>
        },
        {
            path: "/eventorganizing",
            name: "EventOrganizing",
            icon:<FaChalkboard/>
        },
        {
            path: "/eventparticipation",
            name: "EventParticipation",
            icon:<FaUsers/>
        },
    ];

    return (
        <div style={{maxWidth:'100%',padding:'0%' ,textDecoration: 'none'}} className="container">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <div style={{ display: isOpen ? "block" : "none" }} className="logo">
                      <a href='/' className='sies_logo'>
                         <img border="0" alt="logo" src="sies_gst_logo.jpg" className='img_logo'/>
                      </a>
                    </div>
                
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeClassName="active"  style={{textDecoration: 'none'}}>
                            <div className="icon">
                                {item.icon }
                                </div>
                            <div style={{ display: isOpen ? "block" : "none" ,textDecoration: 'none'}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
