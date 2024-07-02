
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './comp/SIDE/Sidebar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import EventPage from './pages/EventPage.jsx';
// import EventOrganizing from './pages/EventOrganizing.jsx';
import EventParticipation from './pages/EventParticipation.jsx';
import Header from './comp/Header/header.js';
import  { useState } from 'react';
import SummaryPage from './pages/SummaryPage.jsx';
import Login_form from './comp/login/login_form.js';
import Footer from './comp/Footer/footer.jsx';


function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');}
  return (
    <div className={`App ${theme}`}>
    
      <BrowserRouter>
      <Header toggleTheme={toggleTheme}/>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/eventpage" element={<EventPage />} /> */}
          <Route path="/eventparticipation" element={<EventParticipation />} />
          <Route path="/summarypage" element={<SummaryPage />} />
          <Route path="/login" element={<Login_form/>}/>
          
        </Routes>
      </Sidebar>
      <Footer/>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
