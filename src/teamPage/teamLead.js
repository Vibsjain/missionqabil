import React from 'react';
import "./teamLead.css";
import AOS from 'aos';
import motu from "../images/motu.jpg";
import diazy from "../teamImage/daizy.jpeg";
import anima from "../teamImage/anima.jpeg";

const lead = () => {

    AOS.init({
        duration: 1000
    })

    return(
        <div className="teamLeads">
            <h1>TEAM LEADS</h1>
            <div data-aos="fade-up" className="leadMembers">
                <div className="leadMember">
                    <img data-aos="flip-up" className="img-lead" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="leadMember">
                    <img data-aos="flip-up" className="img-lead" src={motu} />
                    <p className="text-white name">Siddharth Singh</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="leadMember">
                    <img data-aos="flip-up" className="img-lead" src={diazy} />
                    <p className="text-white name">Daizy Mehta</p>
                    <p className="text-white position">Founder</p>
                </div>
                <div className="leadMember">
                    <img data-aos="flip-up" className="img-lead" src={anima} />
                    <p className="text-white name">Anima Jain</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="leadMember">
                    <img data-aos="flip-up" className="img-lead" src={motu} />
                    <p className="text-white name">Abhishek Midha</p>
                    <p className="text-white position">Position</p>
                </div>
            </div>
        </div>
    )
}

export default lead;