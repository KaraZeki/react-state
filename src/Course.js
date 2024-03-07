import Images1 from "./images/1.jpg";
import Images2 from "./images/2.jpg";
import Images3 from "./images/3.jpg";
import Images4 from "./images/4.jpg";
import Images5 from "./images/5.jpg";
import Images6 from "./images/6.jpg";
import Images7 from "./images/7.jpg";
import Images8 from "./images/8.jpg";
import Images9 from "./images/9.jpg";
import Images10 from "./images/10.jpg";

import './Course.css'

const courseMap = {
  Images1: Images1,
  Images2: Images2,
  Images3: Images3,
  Images4: Images4,
  Images5: Images5,
  Images6: Images6,
  Images7: Images7,
  Images8: Images8,
  Images9: Images9,
  Images10: Images10,
};

function Course({ courseName }) {
  return (
    <div className='courseDiv'>
      <img className='courseImg' src={courseMap[courseName]} alt="course"></img>
    </div>
  );
}

export default Course;
