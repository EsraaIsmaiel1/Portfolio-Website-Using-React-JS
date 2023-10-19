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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque deserunt, praesentium porro
        libero aut corporis quis eius rem ipsam omnis
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UiDesign} alt="UiDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum quos dolores at ullam
              libero accusamus corrupti illo eligendi tempora!
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum quos dolores at ullam
              libero accusamus corrupti illo eligendi tempora!
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="App Design " className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum quos dolores at ullam
              libero accusamus corrupti illo eligendi tempora!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
