import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello"> Hello,</span>
        <span className="introText">
          I'm <span className="introName"> Esraa</span> <br />
          Full Stack Developer
        </span>
        <p className="introPara">
          I'm a skilled Full Stack Web Development using MEARN. <br />I am an expert in HTML, CSS,
          JS, Angular, React.js, Node.js, Express.js and MongoDB. <br /> I love seeing clients
          happy, That's why I'm here,
          <br /> it is a great feeling to help clients reach their goals on time and professionally,
          <br /> this gives me confidence, and gain experience and professionalism.
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="button" className="btnImg" />
            Hire ME
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
