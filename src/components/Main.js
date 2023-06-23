import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

//Student Imports
import StudentProfile from './StudentProfile';
//import CourseList from './CourseList';
//import CourseDetails from './CourseDetails';
//import Career from './Career';
//import Start from './Start';
//import BeforeBot from './BeforeBot';
//import Finish from './Finish';
import PermanentDrawerRight from "./sidebar";

//Staff Imports
//import StaffDashboard from './Staff/StaffDashboard';
//import StaffCourses from './Staff/Courses';
//import Students from './Staff/Students';
//import Settings from './Staff/Settings';
//import Reports from './Staff/Reports';
//import Programmes from './Staff/Programmes';
//import Sessions from './Staff/Sessions';
//import PotentialGraduates from './Staff/PotentialGraduates'

//Global Imports
import "../App.css"
//import "../assets/css/Staff.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./login";
import TopBar from './TopBar';
//import ReactWebChat from "./Bot Framework/webChat";

function Main() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("auth")); // Get authenticated status from localStorage
  const [user, setUser] = useState(localStorage.getItem("user")); // Get type of user from localStorage
  const [recCourses, setRecCourses] = useState(null); // Store recommended courses generated on StudentProfile.js
  //const [careerRecCourses, setCareerRecCourses] = useState(null); // Store recommended courses generated on Career.js
  //const [chosenCourses, setChosenCourses] = useState([]); // Store courses chosen by the user on CourseList.js
  const [show, setShow] = useState(true); // Boolean value to determine whether or not to show the "Begin Advising" button
  const [progress, setProgress] = useState(0); // Value of the user's advising progress percentage
  const [degProgress, setDegProgress] = useState(0); // Value of the user's degree progress percentage
  const [newDeg, setNewDeg] = useState(0); // Value of the user's updated degree progress credits
  const [credits, setCredits] = useState(0); // Value of how much credits the user needs to complete their degree
  const [hide, setHide] = useState(false); // Boolean value to determine whether or not to show the sidebar or not
  //const [showBackBtn, setShowBackBtn] = useState(true); // Boolean value to determine whether or not to show the back button on the course list page
  const [loading, setLoading] = useState(true); // Boolean value to determine whether or not to show a loading circle on the sidebar
  const [year, setYear] = useState(1); // Value of the user's current level
  const [warning, setWarning] = useState(false); // Boolean value to indicate whether or not that the user is on academic warning
  const [botButtons, setBotButtons] = useState(false); // Boolean value to indicate whether or not to show "Back to Courses" and "Finish Advising" buttons on sidebar
  const [programme, setProgramme] = useState(null); // Store what programme a student is current doing
  const [studCredComplete, setStudCredComplete] = useState(0);//credits a student has completed so far
  const [courseInProgCredits, setCourseInProgCredits] = useState(0); //credits of the courses that are in progress
  const [gpa, setGpa] = useState(0); //Student's current gpa
  const [inProgCourses, setInProgCourses] = useState([]); //an array of the student's inprogress courses
  const [transcriptDetails, setTranscriptDetails] = useState(null); //to store a student's transcript details
  //const [gradUploaded, setGradUpload] = useState(false);
  //const [chosenCoursesCreds, setChosenCoursesCreds] = useState(0); // Store chosen courses credits on CourseList.js
  //const [courseChoseNCreds, setCourseChoseNCreds] = useState([]); //array to store chosen course code and credits
  const [courseInProgNCreds, setCourseInProgNCreds] = useState([]); //array to store in progress course code and credits

  /* Setter methods for use by the other pages */
  
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  const setType = (value) => {
    setUser(value);
  };

  const setRecommended = (value) => {
    setRecCourses(value);
  };
/*
  const setCareerRecommended = (value) => {
    setCareerRecCourses(value);
  };
  */

  const setDisplay = (value) => {
    setShow(value);
  };

  const setProg = (value) => {
    setProgress(value);
  };
 
  const setDegProg = (value) => {
    setDegProgress(value);
  };

  const setNewDegProg = (value) => {
    setNewDeg(value);
  };

  const setCreds = (value) => {
    setCredits(value);
  };

  const setHidden = (value) => {
    setHide(value);
  };
/*
  const setShowBack = (value) => {
    setShowBackBtn(value);
  };
*/
  const setLoad = (value) => {
    setLoading(value);
  };

  const setLevel = (value) => {
    setYear(value);
  };

  const setAcWarning = (value) => {
    setWarning(value);
  };
/*
  const setChosen = (value) => {
    setChosenCourses(value);
  };

  */
  const setShowBotButtons = (value) => {
    setBotButtons(value);
  };

  /*
  const setStudentProgramme = (value) => {
    setProgramme(value);
  };
*/
  const setCreditsCompleted = (value) => {
    setStudCredComplete(value);
  };

  const setCourseInprogCreds = (value) => {
    setCourseInProgCredits(value);
  };

  const setStudentGpa = (value) => {
    setGpa(value);
  }

  const setInProgressCourses = (value) => {
    setInProgCourses(value);
  }

  const setTransDetails = (value) => {
    setTranscriptDetails(value);
  }
/*
  const setGradUploaded = (value) => {
    setGradUpload(value);
  }

  const setChosenCoursesCredits = (value) => {
    setChosenCoursesCreds(value);
  }

  const setCourseChoseNCredits = (value) => {
    setCourseChoseNCreds(value);
  }
*/
  const setCourseInProgNCredits = (value) => {
    setCourseInProgNCreds(value);
  }
  
  return (
    <div className="main-panel">
      {user ? <TopBar hide={hide}></TopBar> : null}
      {user === "student" ? <PermanentDrawerRight gpa={gpa} hide={hide} courseInProgCredits={courseInProgCredits} recCourses={recCourses} progress={progress} degProgress={degProgress} credits={credits} show={show} setDisplay={setDisplay} setShowBotButtons={setShowBotButtons} loading={loading} warning={warning} newDeg={newDeg} botButtons={botButtons}/> : null}
    
        <Routes>
          <Route exact path="/" element={
            isAuthenticated && user==="student" ? (<Navigate to="/home"/>) : 
            (isAuthenticated && user==="admin" ? (<Navigate to="/staff"/>) : 
            (<Navigate replace to="/login"/>))
          } />

          <Route exact path="/login" element={
            !isAuthenticated ? (<Login setAuth={setAuth} setType={setType}/>) : 
            (isAuthenticated && user==="admin" ? (<Navigate to="/staff"/>) : 
            (isAuthenticated && user==="student" ? (<Navigate to="/home"/>) : (null)))
          } />

          {/*Student Routes*/},

          <Route exact path="/home" element={
            isAuthenticated && user==="student" ? (<StudentProfile setCourseInProgNCredits={setCourseInProgNCredits} setTransDetails={setTransDetails} setInProgressCourses={setInProgressCourses} setStudentGpa={setStudentGpa} gpa={gpa} courseInProgCredits={courseInProgCredits} setCourseInprogCreds={setCourseInprogCreds} newDeg={newDeg} setNewDegProg={setNewDegProg} credits={credits} setRecommended={setRecommended} setCreditsCompleted={setCreditsCompleted} setDisplay={setDisplay} setProg={setProg} setDegProg={setDegProg} setCreds={setCreds} setHidden={setHidden} setLoad={setLoad} setLevel={setLevel} setAcWarning={setAcWarning} setShowBotButtons={setShowBotButtons} recCourses={recCourses} programme={programme}/>) : 
            (<Navigate to="/"/>)
              
            } 
          />

          {/*
          <Route
            exact
            path="/home"
            render={(props) =>
              {
                if(isAuthenticated && user==="student"){
                  return <StudentProfile {...props} setCourseInProgNCredits={setCourseInProgNCredits} setTransDetails={setTransDetails} setInProgressCourses={setInProgressCourses} setStudentGpa={setStudentGpa} gpa={gpa} courseInProgCredits={courseInProgCredits} setCourseInprogCreds={setCourseInprogCreds} newDeg={newDeg} setNewDegProg={setNewDegProg} credits={credits} setRecommended={setRecommended} setCreditsCompleted={setCreditsCompleted} setDisplay={setDisplay} setProg={setProg} setDegProg={setDegProg} setCreds={setCreds} setHidden={setHidden} setLoad={setLoad} setLevel={setLevel} setAcWarning={setAcWarning} setShowBotButtons={setShowBotButtons} recCourses={recCourses} programme={programme}/>
                } else {
                  return(<Redirect to="/" />)
                }
              }
            }
          />

          <Route
            exact
            path="/courses"
            render={(props) =>
              {
                if(isAuthenticated && user==="student"){
                  return <CourseList {...props} setCourseChoseNCredits={setCourseChoseNCredits} setChosenCoursesCredits={setChosenCoursesCredits} setProg={setProg} setHidden={setHidden} setDisplay={setDisplay} setChosen={setChosen} setNewDegProg={setNewDegProg} showBackBtn={showBackBtn} setShowBotButtons={setShowBotButtons} recCourses={recCourses} careerRecCourses={careerRecCourses} chosenCourses={chosenCourses} newDeg={newDeg}/>
                } else {
                  return(<Redirect to="/" />)
                }
              }
            }
          />

          <Route
            exact
            path="/coursedetails"
            render={(props) =>
              {
                if(isAuthenticated && user==="student"){
                  return <CourseDetails {...props} />
                } else {
                  return(<Redirect to="/" />)
                }
              }
            }
          />

          <Route
            exact
            path="/career"
            render={(props) =>
              {
                if(isAuthenticated && user==="student"){
                  return <Career {...props} setDisplay={setDisplay} setProg={setProg} setCareerRecommended={setCareerRecommended} year={year} recCourses={recCourses}/>
                } else {
                  return(<Redirect to="/" />)
                }
              }
            }
          />

          <Route
            exact
            path="/start"
            render={(props) =>
              {
                if(isAuthenticated && user==="student"){
                  return <Start {...props} setHidden={setHidden} setDegProg={setDegProg} setCreds={setCreds} setShowBack={setShowBack} setRecommended={setRecommended} setShowBotButtons={setShowBotButtons} setStudentProgramme={setStudentProgramme} recCourses={recCourses}/>
                } else {
                  return(<Redirect to="/" />)
                }
              }
            }
          />

          <Route
            exact
            path="/almostdone"
            render={(props) =>
              {
                if(isAuthenticated && user==="student"){
                  return <BeforeBot setShowBotButtons={setShowBotButtons}/>
                } else {
                  return(<Redirect to="/" />)
                }
              }
            }
          />

          <Route
            exact
            path="/finish"
            render={(props) =>
              {
                if(isAuthenticated && user==="student"){
                  return <Finish courseInProgNCreds={courseInProgNCreds} courseChoseNCreds={courseChoseNCreds} chosenCoursesCreds={chosenCoursesCreds} courseInProgCredits={courseInProgCredits} setGradUploaded={setGradUploaded} gradUploaded={gradUploaded} transcriptDetails={transcriptDetails} inProgCourses={inProgCourses} newDeg={newDeg} chosenCourses={chosenCourses} studCredComplete={studCredComplete} setProg={setProg} setShowBotButtons={setShowBotButtons}/>
                } else {
                  return(<Redirect to="/" />)
                }
              }
            }
          />    
          */},
          {/*Bot Route*/},
          {/*
          <Route
            exact
            path="/bot"
            render={(props) =>
              {
                if(isAuthenticated && user==="student"){
                  return (
                  <div className="row">
                    <div className="col-sm-10">
                      <ReactWebChat {...props} />
                    </div>
                  </div>
                )
                } else {
                  return(<Redirect to="/" />)
                }
              }
            }
          />  
          */},

          {/*Staff Routes*/},
          {/*
          <Route
            exact
            path="/staff"
            render={(props) =>
              {
                if(isAuthenticated && user==="admin"){
                  return <StaffDashboard {...props} />
                } else {
                  return(<Redirect to="/" />)
                }
              }
            }
          />        

          <Route
            exact
            path="/staff/courses"
            render={(props) =>
              {
                if(isAuthenticated && user==="admin"){
                  return <StaffCourses {...props} />
                } else {
                  return(<Redirect to="/" />)
                }
              }
            }
          />

          <Route
            exact
            path="/staff/programmes"
            render={(props) =>
              {
                if(isAuthenticated && user==="admin"){
                  return <Programmes {...props} />
                } else {
                  return(<Redirect to="/" />)
                }
              }
            }
          />

          <Route
            exact
            path="/staff/students"
            render={(props) =>
              {
                if(isAuthenticated && user==="admin"){
                  return <Students {...props} />
                } else {
                  return(<Redirect to="/" />)
                }
              }
            }
          />

          <Route
            exact
            path="/staff/settings"
            render={(props) =>
              {
                if(isAuthenticated && user==="admin"){
                  return <Settings {...props} />
                } else {
                  return(<Redirect to="/" />)
                }
              }
            }
          />
          
          <Route
            exact
            path="/staff/reports"
            render={(props) =>
              {
                if(isAuthenticated && user==="admin"){
                  return <Reports {...props} />
                } else {
                  return(<Redirect to="/" />)
                }
              }
            }
          />                        

          <Route
            exact
            path="/staff/sessions"
            render={(props) =>
              {
                if(isAuthenticated && user==="admin"){
                  return <Sessions {...props} />
                } else {
                  return(<Redirect to="/" />)
                }
              }
            }
          />  

          <Route
            exact
            path="/staff/graduates"
            render={(props) =>
              {
                if(isAuthenticated && user==="admin"){
                  return <PotentialGraduates {...props} />
                } else {
                  return(<Redirect to="/" />)
                }
              }
            }
          />   

          */}
        </Routes>
    </div>
    
  );
}

export default Main;