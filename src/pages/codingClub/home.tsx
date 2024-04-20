// import React from "react";

// function CCHome() {
//     return <div>
//         WELCOME TO CODING CLUB
//     </div>
// };

// export default CCHome;

import React from "react";
import "./home.css";

function SectionOne() {
  return (
    <div className="aboutContainer">
      <div className="sectionOne">
        <p className="textTypeOne">Hi, my name is</p>
        <p className="textTypeTwo">Maanasa GS</p>
        <p className="textTypeThree">
          I am a learning <b>Full stack developer</b> and a{" "}
          <b>UI/UX Designer</b>. I am also a <b>Graphic Designer</b> and have
          experience as a <b>Social Media Manager</b>. Oh I love{" "}
          <b>Video Editing</b> too. Does <b>Photography</b> using my phone
          count?
        </p>
        <button type="button" className="mainButton">
          View My Resume
        </button>
      </div>{" "}
    </div>
  );
}

function SectionTwo() {
  return (
    <div>
      <div>
        <h3>About Me</h3>
      </div>
    </div>
  );
}

export default function CCHome() {
  return (
    <div className="container">
      <SectionOne />
      <SectionOne />
      <SectionOne />
      {/* <SectionTwo /> */}
    </div>
  );
}
