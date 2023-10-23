import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/Screenshot 2023-10-23 202205.png';
import Portfolio2 from '../../assets/Screenshot 2023-10-23 223558.png';
import Portfolio3 from '../../assets/Screenshot 2023-10-23 231243.png';
import Portfolio4 from '../../assets/Screenshot 2023-10-23 231407.png';

function Works() {
  return (
    <section id="works">
      <h2 className="worksTitle"> My Portfolio </h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and making sure that my work is
        pixel perfect. I am exited to bring my skills and experience to help businesses achieve
        their goals and create a strong online presence
      </span>
      <div className="worksImgs worksContainer">
        <div class="workItem">
          <img src={Portfolio1} alt="Portfolio1" className="worksImg" />
          <a
            href="https://github.com/EsraaIsmaiel1/Ecommerce-Website"
            target="_blank"
            class="workLink"
          >
            Link
          </a>
        </div>
        <div class="workItem">
          <img src={Portfolio2} alt="Portfolio2" className="worksImg" />
          <a
            href="https://github.com/EsraaIsmaiel1/Full-Stack-Ecommerce-website-using-Angular-and-Node.js-"
            target="_blank"
            class="workLink"
          >
            Link
          </a>
        </div>
        <div class="workItem">
          <img src={Portfolio3} alt="Portfolio3" className="worksImg" />
          <a
            href="https://github.com/EsraaIsmaiel1/Angular-ITI-Tasks"
            target="_blank"
            class="workLink"
          >
            Link
          </a>
        </div>
        <div class="workItem">
          <img src={Portfolio4} alt="Portfolio4" className="worksImg" />
          <a href="https://github.com/ITI-Menofia-MEARN-Team" target="_blank" class="workLink">
            Link
          </a>
        </div>
      </div>
      {/* <button className="worksBtn"> See More</button> */}
    </section>
  );
}

export default Works;
