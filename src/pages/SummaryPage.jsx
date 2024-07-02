import React, { useState, useEffect } from 'react';
 import { FaTh, FaChalkboard, FaUsers, FaBookOpen,FaArrowRight } from 'react-icons/fa';
import { GiProgression } from "react-icons/gi";
import Footer from '../comp/Footer/footer';
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Sector, } 
 from 'recharts';
 import './summarypage.css'
 const COLORS = ["#0088FE",  "#FF8042"];






function SummaryPage() {

  const data2 = [
    {
      "name": "My progress",
      "y":"No. of Events",
      "achievement": 1,
      "participation": 3
    },
    
  ];
  const data1 = [
    { name: "participation", value: 3 },
    { name: "achievement", value: 1 },
  
  ];
  const [data, setData] = useState([]);
  const api_key = 'http://localhost:8000/api/posts/';

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(api_key);
        if (!response.ok) {
          throw new Error("HTTP error");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    }
    fetchData();
  }, []);
  
  return (
    
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Dashboard</h3>
                    <FaTh className='card_icon'/>
                </div>
                <h1><FaArrowRight className='card_icon'/></h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Event Page</h3>
                    <FaBookOpen className='card_icon'/>
                </div>
                <h1><FaArrowRight className='card_icon'/></h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Event Participation</h3>
                    <FaUsers className='card_icon'/>
                </div>
                <h1><FaArrowRight className='card_icon'/></h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Summary</h3>
                    <GiProgression className='card_icon'/>
                </div>
                <h1><FaArrowRight className='card_icon'/></h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={100}
            height={500}
            data={data2}
            margin={{
                top: 10,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: 'Events attented', angle: -90, position: 'insideLeft' }}/>
                <Tooltip />
                <Legend />
                <Bar dataKey="participation" fill="#8884d8" />
                <Bar dataKey="achievement" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
          <PieChart width={500} height={500}>
            <Pie
              data={data1}
              cx="50%"
              cy="50%"
              labelLine={true}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {data1.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
          
        </ResponsiveContainer>
        

        </div>
        <div className="App">
    <h1>Posts</h1>
    {data.map(post => (
      <div key={post.id}>
        <h2>{post.eventName}</h2>
        <p>{post.eventDate}</p>
        <p>{post.achievement}</p>
        {/* <p>{post.summry}</p> */}
      </div>
    ))}
  </div>
    
    </main>
    

  )
}

export default SummaryPage;