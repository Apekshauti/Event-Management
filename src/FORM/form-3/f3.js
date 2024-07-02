
import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import './f3.css'
// import MyForm from './MyForm';
// import PdfContent from './PdfContent';

const Report = () => {
  const [name, setName] = useState('');
  const [prn, setPrn] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    generatePdf();
  };

  const generatePdf = () => {
    const element = document.getElementById('pdf-content');
    const opt = {
      margin: 1,
      filename: 'my-pdf-report.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="container" style={{display:'block'}}>
      <h1 className='text_re'>Get Event details(admin)</h1><br/><br/>
      <div className="form-container" >
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className='name_re'>Event_Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input-name"
          /><br/><br/><br/><br/>
          <label htmlFor="prn">Date(From dd/mm/yyyy to dd/mm/yyyy):</label>
          <input
            type="text"
            id="prn"
            value={prn}
            onChange={(e) => setPrn(e.target.value)}
            className="form-input-prn"
          />
          <br/><br/><br/><br/><br/><br/>
          <button type="submit" className="form-button">
            <div className='button-content'>Get Excel File</div>
          </button>
        </form>
        <br/><br/><br/>
      </div>
      <br/><br/><br/><br/><br/><br/>
    </div>
  );
};

export default Report;