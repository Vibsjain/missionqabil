import React from 'react';
import "./teamMember.css";
import AOS from 'aos';
import motu from "../images/motu.jpg";
import anshika from "../teamImage/anshika.jpeg";
import kushagra from "../teamImage/kushagra.jpeg";
import sameer from "../teamImage/sameer.jpeg";
import kartik from "../teamImage/kartik.jpeg";
import himanshu from "../teamImage/himanshu.jpg";
import anurag from "../teamImage/anurag.jpeg";
import vaibhav from "../teamImage/vaibhav.jpeg";
import amogh from "../teamImage/amogh.jpeg";
import karan from "../teamImage/karan.jpeg";
import siddhant from "../teamImage/siddhant.jpeg";
import chehak from "../teamImage/chehak.jpeg";
import riya from "../teamImage/riya.jpeg";
import garvit from "../teamImage/garvit.jpeg";
import puneet from "../teamImage/puneet.jpeg";
import ridham from "../teamImage/ridham.jpeg";
import vanshika from "../teamImage/vanshika.jpeg";
import vikash from "../teamImage/vikash.jpeg";
import aditya from "../teamImage/aditya.png";

const member = () => {

    AOS.init({
        duration: 1000
    })

    return(
        <div className="teamMembers">
            <h1>TEAM MEMBERS</h1>
            <div data-aos="fade-up" className="Members">
                <div className="Member">
                    <img className="img-member" src={karan} />
                    <p className="text-white name">Karan Bajaj</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={aditya} />
                    <p className="text-white name">Aaditya Narayan Subedy</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={sameer} />
                    <p className="text-white name">Sameer Ahmed</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={riya} />
                    <p className="text-white name">Riya Dev Varshney</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={kartik} />
                    <p className="text-white name">Kartik Tomar</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={amogh} />
                    <p className="text-white name">Amogh Jalan</p>
                </div> 
            </div>
            <div data-aos="fade-up" className="Members">
                <div className="Member">
                    <img className="img-member" src={siddhant} />
                    <p className="text-white name">Siddhant Singh</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={vaibhav} />
                    <p className="text-white name">Vaibhav</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={anshika} />
                    <p className="text-white name">Anshika Jain</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={kushagra} />
                    <p className="text-white name">Kushagra Wadhwa</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={anurag} />
                    <p className="text-white name">Anurag Gupta</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={chehak} />
                    <p className="text-white name">Chehak Batra</p>
                </div> 
            </div>
            <div data-aos="fade-up" className="Members">
                <div className="Member">
                    <img className="img-member" src={vanshika} />
                    <p className="text-white name">Vanshika Gupta</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={puneet} />
                    <p className="text-white name">Puneet Sehrawat</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={garvit} />
                    <p className="text-white name">Garvit Gulati</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={himanshu} />
                    <p className="text-white name">Himanshu Yadav</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={ridham} />
                    <p className="text-white name">Ridham Jain</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={vikash} />
                    <p className="text-white name">Vikash</p>
                </div> 
            </div>
        </div>
    )
}

export default member;