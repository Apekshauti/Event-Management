import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import Eventtype from './eventtype';
import axios from 'axios';
import './f1.css'

function Feed() {
  const [eventName, setEventName] = useState('');
  const [duration, setDuration] = useState('');
  const [achievement, setAchievement] = useState('');
  const [Namestudent, setNamestudent] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [generatedText, setGeneratedText] = useState("");
  const [loading, setLoading] = useState(false);
  // const [department, setDepartment] = useState('Information Technology'); // Default department

  useEffect(() => {
    function setFormFields(text) {
      setLoading(false); 
      const lines = text.split('\n');
      let foundDate = false;
      
      lines.forEach(line => {
        const [key, value] = line.split(':');
        console.log(key, value);
        switch (key.trim()) {
          case 'Event Name':
            setEventName(value.trim());
            break;
          case 'Date':
            if (!foundDate) {
              setEventDate(parseAndFormatDate(value.trim()));
              foundDate = true;
            }
            break;

          case 'Student Name':
            setNamestudent(value.trim());
            break;
          case 'Achievement':
            setAchievement(value.trim());
            break;
          case 'Duration':
            setDuration(value.trim());
            break;
          // case 'Department':
          //   setDepartment(value.trim());
            break;
        }
      });
  
      if (!foundDate) {
        setEventDate('');
      }
    }
  
    if (generatedText) {
      setFormFields(generatedText);
    }
  }, [generatedText]);

  const handleChange = (event) => {
    setSelectedImage(event.target.files[0]);
    handleGenerate(event.target.files[0]);
  }

  const handleGenerate = async (image) => {
    if (!image) return;

    setLoading(true); 
    const genAI = new GoogleGenerativeAI('AIzaSyDYecx7ZQUfrUOksHRU1JHLFPxJuHyfy5Y');
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

    const prompt = "read the image, and find name of event,name of student ,date,achievement like participant or got first or second position in event, also find the duration of event, and at last write the main central part as it is written";


    const reader = new FileReader();
    reader.onloadend = async () => {
      const imagePart = {
        inlineData: {
          data: reader.result.split(",")[1],
          mimeType: image.type
        },
      };

      const result = await model.generateContent([prompt, imagePart]);
      const response = await result.response;
      const text = await response.text();
      setGeneratedText(text);
      // console.log(text)
    };
    reader.readAsDataURL(image);
  }

  

  // Function to parse various date formats and convert them to DD/MM/YYYY or range DD/MM/YYYY - DD/MM/YYYY
  function parseAndFormatDate(dateString) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    // Function to parse a single date
    const parseSingleDate = (singleDateString) => {
      let parsedDate = new Date(singleDateString);
      if (!isNaN(parsedDate)) {
        return parsedDate.toLocaleDateString('en-GB'); // UK format is DD/MM/YYYY
      } else {
        const regex = /(\d{1,2})\w{2} ([a-zA-Z]+) (\d{4})/;
        const matches = singleDateString.match(regex);
        if (matches && matches.length === 4) {
          const monthIndex = monthNames.findIndex(month => month.toLowerCase() === matches[2].toLowerCase());
          if (monthIndex !== -1) {
            const month = (monthIndex + 1).toString().padStart(2, '0');
            const day = matches[1].padStart(2, '0');
            return `${day}/${month}/${matches[3]}`;
          }
        }
      }
      return singleDateString; // or "Date format unknown";
    };

    // Check for date range
    if (dateString.toLowerCase().includes('to')) {
      const dateParts = dateString.split('to');
      if (dateParts.length === 2) {
        // Parse each date in the range and return the formatted string
        const startDate = parseSingleDate(dateParts[0].trim());
        const endDate = parseSingleDate(dateParts[1].trim());
        return `${startDate} - ${endDate}`;
      }
    }

    // If not a range, parse as a single date
    return parseSingleDate(dateString);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('eventName', eventName);
    formData.append('eventDate', eventDate);
    formData.append('Namestudent', Namestudent);
    formData.append('duration', duration);
    formData.append('achievement', achievement);
    formData.append('generatedText', generatedText);
    // formData.append('eventSubType', Eventtype);
    // formData.append('eventSubSubType', Eventtype);
    formData.append('img', selectedImage);

    try {
      await axios.post('http://127.0.0.1:8000/api/posts/', formData, 
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Event saved successfully!');
    } catch (error) {
      alert('Error saving event detail');
}};

  return (
    <div>    
      <h1 className='he'>Event Participation Details </h1>
      <form>
        <div className="sui">
          <div className='ocr'>
            <label htmlFor="image" style={{marginTop:"20px",marginBottom:"20px"}}>Upload Certificate(only* JPG. format)</label><br />
            <div>
              <input type="file" accept="image/*" onChange={handleChange} style={{marginBottom:"30px"}} />
            </div>
            {loading && <p>Loading...</p>}
          </div>
          <br />
        </div>
        <div className='deatail'>
          Name:
          <input type="text" value={Namestudent} onChange={(e) => setNamestudent(e.target.value)} style={{ width: '350px', marginLeft:"10px", fontSize: '25px' }}/>
          <br/>
        </div>
        <br/>
       
        <div className='deatail'>
          Event Name: 
          <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} style={{ width: '350px', marginLeft:"20px", fontSize: '25px' }}/>
        </div>
        <br />
        <div className='deatail'>
          Date of Event:
          <input type="text" value={eventDate} onChange={(e) => setEventDate(e.target.value)} style={{ width: '350px', marginLeft:"10px", fontSize: '25px' }} />
        </div>
        <br />
        {/* <Eventtype style={{ fontSize: '25px' }} /> */}
        <br />
      

        <div className='deatail'>
          Duration:
          <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} style={{ width: '350px', marginLeft:"10px", fontSize: '25px' }}/>
        </div>
        <br />
        <div className='deatail'>
          Achievement:
          <input type="text" value={achievement} onChange={(e) => setAchievement(e.target.value)} style={{ width: '350px', marginLeft:"10px", fontSize: '25px' }}/>
        </div>
<div className='formsubmit'>
        <button type="submit" onClick={handleSubmit} >Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Feed;
