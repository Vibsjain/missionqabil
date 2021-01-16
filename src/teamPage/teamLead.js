import React from 'react';
import "./teamLead.css";
import AOS from 'aos';
import motu from "../images/motu.jpg";
import diazy from "../teamImage/daizy.jpeg";
import anima from "../teamImage/anima.jpeg";
import abhishek from "../teamImage/abhishek.jpeg";
import siddharth from "../teamImage/siddharth.jpeg";
import rahul from "../teamImage/rahul.jpeg";

const lead = () => {

    AOS.init({
        duration: 1000
    })

    return(
        <div className="teamLeads">
            <h1>TEAM LEADS</h1>
            <div data-aos="fade-up" className="leadMembers">
                <div className="leadMember">
                    <img data-aos="flip-up" className="img-lead" src={rahul} />
                    <p className="text-white name">Rahul Mahar</p>
                </div>
                <div className="leadMember">
                    <img data-aos="flip-up" className="img-lead" src={siddharth} />
                    <p className="text-white name">Siddharth Singh</p>
                </div>
                <div className="leadMember">
                    <img data-aos="flip-up" className="img-lead" src={diazy} />
                    <p className="text-white name">Daizy Mehta</p>
                </div>
                <div className="leadMember">
                    <img data-aos="flip-up" className="img-lead" src={anima} />
                    <p className="text-white name">Anima Jain</p>
                </div>
                <div className="leadMember">
                    <img data-aos="flip-up" className="img-lead" src={abhishek} />
                    <p className="text-white name">Abhishek Midha</p>
                </div>
            </div>
        </div>
    )
}

export default lead;