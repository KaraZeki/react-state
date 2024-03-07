import "./App.css";
import { useState } from "react";
import Course from "./Course";

function getRandomCourse() {
  const courseArray = ["Images1", "Images2", "Images3", "Images4", "Images5", "Images6", "Images7", "Images8", "Images9", "Images10"];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function App() {
  const [courses, setCourse] = useState([]);

  const handleClick = () => {
    setCourse([...courses, getRandomCourse()]);
  };

  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course}></Course>;
  });

  return (
    <div className='App'>
      <button className='appButton' onClick={handleClick}> Kurs Ekle</button>
      <div className='courseList'>{courseList}</div>
    </div>
  );
}

export default App;


