import React from 'react';
import './skill.css';
import UiDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
const Skill = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        As a Full stack developer proficient in MEARN (MongoDB, Express.js, Angular.js, React.js ,
        Node.js) I can build and develope a full stack website that use RESTful APIs in Backend and
        integrated it successfully in Front-end side.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UiDesign} alt="UiDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Backend Technologies</h2>
            <p>
              I can design and develope RESTful APIs using frameworks like Express.js. In addition
              to handling HTTP methods, request/response handling, authentication, and authorization
              and using Postman for testing. I have experience in dealing with NoSQL database ex.
              MongoDB with the ability to design data models, create collections, perform CRUD
              operations, and optimize database queries.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Frontend Technologies</h2>
            <p>
              I have experience in developing frontend applications using React, plus the knowledge
              of React components, state management (e.g., using hooks or Redux), and routing (e.g.,
              using React Router). Plus, the ability to write modular, reusable, and maintainable
              CSS code and experience with CSS frameworks like Bootstrap and Tailwind CSS. in
              Addition to experience in developing applications using Angular.js and handling
              routing.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="App Design " className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design and Implementation</h2>
            <p>
              I have deep understanding of UI/UX principles, including responsive design,
              accessibility, and cross-browser compatibility. I have experience in building
              responsive web applications that work well across different devices and screen sizes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
