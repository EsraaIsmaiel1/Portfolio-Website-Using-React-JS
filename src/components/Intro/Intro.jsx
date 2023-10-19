import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
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
        <p className="introPara">I'm a skilled Full Stack Web Development using MEARN</p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="button" className="btnImg" />
            Hire ME
          </button>
        </Link>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
};

export default Intro;
