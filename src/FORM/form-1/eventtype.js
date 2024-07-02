import React, { useState } from 'react';



function Eventtype() {
    const [eventType, setEventType] = useState('');
    const [eventSubType, setEventSubType] = useState('');
    const [eventSubSubType, setEventSubSubType] = useState('');
    const eventTypes = [
        { label: "Technical Event", subTypes: ["Hackathons", "Coding Competitions", "Robotics Competitions", "Engineering Design Challenges"] },
        { label: "Career Development Events", subTypes: ["Job Fairs/Internship Expos", "Resume Workshops", "Mock Interview Sessions"] },
        { label: "Industry Interaction Events", subTypes: ["Guest Lectures", "Industry Visits"] },
        { label: "Project and Research Events", subTypes: ["Project Exhibitions", "Research Paper Competitions"] },
        { label: "Social and Cultural Events", subTypes: ["Cultural Festivals", "Sports Tournaments"] },
        { label: "Entrepreneurship Events", subTypes: ["Startup Competitions", "Entrepreneurship Workshops"] }
      ];
    
      const jobFairInternshipExposSubSubTypes = [
        "College-specific Job Fairs",
        "Industry-wide Job Fairs",
        "Internship Expos",
        "Tech Recruitment Drives"
      ];
    
      const resumeWorkshopsSubSubTypes = [
        "Resume Building Sessions",
        "CV Writing Workshops",
        "Personal Branding Seminars",
        "LinkedIn Profile Optimization Workshops"
      ];
    
      const mockInterviewSessionsSubSubTypes = [
        "Technical Interview Practice",
        "Behavioral Interview Practice",
        "Industry-specific Interview Workshops",
        "Interview Skill Development Bootcamps"
      ];
    
      const guestLecturesSubSubTypes = [
        "Industry Expert Talks",
        "Alumni Talks",
        "Tech Entrepreneur Speaker Series",
        "Panel Discussions on Emerging Technologies"
      ];
    
      const industryVisitsSubSubTypes = [
        "Factory Visits",
        "Research Lab Tours",
        "Tech Company Tours",
        "Startup Incubator Visits"
      ];
    
      const projectExhibitionsSubSubTypes = [
        "Engineering Project Expo",
        "Poster Presentations",
        "Project Showcases",
        "Innovation Fairs"
      ];
    
      const researchPaperCompetitionsSubSubTypes = [
        "Technical Paper Presentations",
        "Conference Paper Submissions",
        "Engineering Research Symposiums",
        "Student Research Conferences"
      ];
    
      const codingCompetitionSubTypes = [
        { label: "Intra-college Coding Competitions", subSubTypes: [] },
        { label: "Inter-college Coding Competitions", subSubTypes: [] },
        { label: "Algorithm Challenges", subSubTypes: [] },
        { label: "Programming Contests (e.g., ACM ICPC)", subSubTypes: [] }
      ];
    
      const hackathonSubTypes = [
        { label: "College-level Hackathons", subSubTypes: [] },
        { label: "Inter-college Hackathons", subSubTypes: [] },
        { label: "Industry-sponsored Hackathons", subSubTypes: [] },
        { label: "Theme-based Hackathons", subSubTypes: [] }
      ];
    
      const roboticsCompetitionSubTypes = [
        { label: "Robot Wars", subSubTypes: [] },
        { label: "Autonomous Robotics Challenges", subSubTypes: [] },
        { label: "Line-following Robot Competitions", subSubTypes: [] },
        { label: "Robo-Soccer Tournaments", subSubTypes: [] }
      ];
    
      const engineeringDesignChallengeSubTypes = [
        { label: "Design-a-Thon", subSubTypes: [] },
        { label: "Prototyping Competitions", subSubTypes: [] },
        { label: "Engineering Innovation Challenges", subSubTypes: [] },
        { label: "3D Printing Competitions", subSubTypes: [] }
      ];
    
      const startupCompetitionsSubSubTypes = [
        "Business Plan Competitions",
        "Startup Pitch Events",
        "Entrepreneurship Challenges",
        "Venture Capitalist Pitching Sessions"
      ];
    
      const culturalFestivalsSubSubTypes = [
        "College Fests",
        "Tech-Cultural Fests",
        "Tech-Cultural Competitions (e.g., Robo-Warriors in Cultural Fests)",
        "Hackathons within Fests"
      ];
    
      const sportsTournamentsSubSubTypes = [
        "Inter-departmental Sports Competitions",
        "College-wide Sports Tournaments",
        "Engineering Sports Leagues",
        "Tech Sports Events (e.g., E-Sports, Drone Racing)"
      ];
    
      const careerDevelopmentSubSubTypes = [
        { label: "Job Fairs/Internship Expos", subSubTypes: jobFairInternshipExposSubSubTypes },
        { label: "Resume Workshops", subSubTypes: resumeWorkshopsSubSubTypes },
        { label: "Mock Interview Sessions", subSubTypes: mockInterviewSessionsSubSubTypes }
      ];
    
      const entrepreneurshipWorkshopsSubSubTypes = [
        "Lean Startup Workshops",
        "Business Model Canvas Sessions",
        "Startup Incubation Programs",
        "Mentoring Sessions with Entrepreneurs"
      ];
    
      const entrepreneurshipSubSubTypes = [
        { label: "Startup Competitions", subSubTypes: startupCompetitionsSubSubTypes },
        { label: "Entrepreneurship Workshops", subSubTypes: entrepreneurshipWorkshopsSubSubTypes }
      ];
    
  return (
    <div>
     <div className="form-group">
          <label>Event Type:</label>
          <select required value={eventType} onChange={(e) => setEventType(e.target.value)}>
            <option value="">Select</option>
            {eventTypes.map((type, index) => (
              <option key={index} value={type.label}>{type.label}</option>
            ))}
          </select>
        </div>

        {eventType && eventType !== "Select" &&
          <div className="form-group">
            <label>Event Sub-Type:</label>
            <select value={eventSubType} onChange={(e) => setEventSubType(e.target.value)}>
              <option value="">Select</option>
              {eventTypes.find(type => type.label === eventType).subTypes.map((subType, index) => (
                <option key={index} value={subType}>{subType}</option>
              ))}
            </select>
          </div>
        }

        {eventSubType && eventSubType !== "Select" &&
          <div className="form-group">
            <label>Event Sub-Sub-Type:</label>
            <select value={eventSubSubType} onChange={(e) => setEventSubSubType(e.target.value)}>
            <option value="">Select</option>
      {(() => {
        switch (eventSubType) {
          case "Job Fairs/Internship Expos":
            return jobFairInternshipExposSubSubTypes.map((subSubType, index) => (
              <option key={index} value={subSubType}>{subSubType}</option>
            ));
          case "Resume Workshops":
            return resumeWorkshopsSubSubTypes.map((subSubType, index) => (
              <option key={index} value={subSubType}>{subSubType}</option>
            ));
          case "Mock Interview Sessions":
            return mockInterviewSessionsSubSubTypes.map((subSubType, index) => (
              <option key={index} value={subSubType}>{subSubType}</option>
            ));
                  case "Coding Competitions":
                    return codingCompetitionSubTypes.map((subType, index) => (
                      <option key={index} value={subType.label}>{subType.label}</option>
                    ));
                  case "Hackathons":
                    return hackathonSubTypes.map((subType, index) => (
                      <option key={index} value={subType.label}>{subType.label}</option>
                    ));
                  case "Robotics Competitions":
                    return roboticsCompetitionSubTypes.map((subType, index) => (
                      <option key={index} value={subType.label}>{subType.label}</option>
                    ));
                  case "Engineering Design Challenges":
                    return engineeringDesignChallengeSubTypes.map((subType, index) => (
                      <option key={index} value={subType.label}>{subType.label}</option>
                    ));
                  case "Career Development Events":
                    return careerDevelopmentSubSubTypes.map((subType, index) => (
                      <option key={index} value={subType.label}>{subType.label}</option>
                    ));
                  case "Guest Lectures":
                    return guestLecturesSubSubTypes.map((subType, index) => (
                      <option key={index} value={subType}>{subType}</option>
                    ));
                  case "Industry Visits":
                    return industryVisitsSubSubTypes.map((subType, index) => (
                      <option key={index} value={subType}>{subType}</option>
                    ));
                  case "Project Exhibitions":
                    return projectExhibitionsSubSubTypes.map((subType, index) => (
                      <option key={index} value={subType}>{subType}</option>
                    ));
                  case "Research Paper Competitions":
                    return researchPaperCompetitionsSubSubTypes.map((subType, index) => (
                      <option key={index} value={subType}>{subType}</option>
                    ));
                  case "Cultural Festivals":
                    return culturalFestivalsSubSubTypes.map((subType, index) => (
                      <option key={index} value={subType}>{subType}</option>
                    ));
                  case "Sports Tournaments":
                    return sportsTournamentsSubSubTypes.map((subType, index) => (
                      <option key={index} value={subType}>{subType}</option>
                    ));
                  case "Startup Competitions":
                    return startupCompetitionsSubSubTypes.map((subType, index) => (
                      <option key={index} value={subType}>{subType}</option>
                    ));
                  case "Entrepreneurship Workshops":
                    return entrepreneurshipWorkshopsSubSubTypes.map((subType, index) => (
                      <option key={index} value={subType}>{subType}</option>
                    ));
                  default:
                    return null;
                }
              })()}
            </select>
          </div>
        }
      
    </div>
  )
}

export default Eventtype