import React from 'react';
import logo from "../assets/logo.png";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import "./style.css";

const C = () => {
  return (
    <div className="container">
      <div style={{display:"flex"}}>
      <div className="imageContainer">
        <img src={image1} alt="trophy" />
      </div>
      <div className="content">
        <img className="logo" src={logo} alt="logo" />
        <h3>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
        <ul>
          <li>
            C.R.I.'s energy efficient products are well recognized by various Government Institutions,
            as trustworthy products for various projects across the globe to save energy.
          </li>
          <li>
            C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited)
            to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
          </li>
        </ul>
        <img className="certi" src={image2} alt="certificate" />
        <p>
          Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I.
          Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
        </p>
      </div>
      </div>
      <div className="info">
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
        </p>
        <figure>
          <img className="parts" src={image3} alt="parts" />
          <figcaption>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</figcaption>
        </figure>
        <hr />
        <h3> C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
        <p>
        CHEMICALS & PROCESS <span>|</span> POWER <span>|</span> WATER & WASTE WATER <span>|</span> OILS & GAS <span>|</span> PHARMA <span>| </span> 
        SUGARS & DISTILLERIES <span>|</span> PAPER & PULP <span>|</span> MARINE & DEFENCE <span>|</span> METAL & MINING <span>| </span> 
          FOOD & BEVERAGE <span>|</span> PETROCHEMICAL & REFINERIES <span>|</span> SOLAR <span>|</span> BUILDING <span>|</span> HVAC <span>| </span> 
           FIRE FIGHTING <span>|</span> AGRICULTURE & RESIDENTIAL
        </p>
      </div>
      <footer>
        <div id='svgC' ><svg id='svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ec3237" viewBox="0 0 256 256"><path d="M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z"></path></svg> 
       <p> Toll free <b>1800 200 1234</b></p></div>
      
      <div><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path fill="#ffffff" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg> 
       <p>www.facebook.com/cripumps</p></div>
      
      <div><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path fill="#ffffff" d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/></svg> 
       <p>www.crigroups.com</p></div>
      
      </footer>
    </div>
  );
};

export default C;
