import React from 'react';
import "./teamVolunteer.css";
import AOS from 'aos';
import motu from "../images/motu.jpg";
import vibhor from "../teamImage/vibhor.jpeg";
import aseem from "../teamImage/aseem.jpeg";
import chirag from "../teamImage/chirag.jpeg";
import akshat from "../teamImage/akshat.jpeg";
import naman from "../teamImage/naman.jpeg";
import satyam from "../teamImage/satyam.jpeg";
import muskan from "../teamImage/muskan.jpeg";
import rachit from "../teamImage/rachit.jpeg";
import anushka from "../teamImage/anushka.jpeg";
import anuj from "../teamImage/anuj.jpeg";
import parth from "../teamImage/parth.jpeg";
import rishabh from "../teamImage/rishabh.jpg";

const volunteer = () => {

    AOS.init({
        duration: 1000
    })

    return(
        <div className="teamVoluteerss">
            <h1>VOLUNTEERS</h1>
            <div data-aos="fade-up" className="volunteers">
                <div className="volunteer">
                    <img data-aos="flip-up" className="img-volunteer" src={anushka} />
                    <p className="text-white name">Anushka Sethi</p>
                </div>
                <div className="volunteer">
                    <img data-aos="flip-up" className="img-volunteer" src={parth} />
                    <p className="text-white name">Parth Dua</p>
                </div>
                <div className="volunteer">
                    <img data-aos="flip-up" className="img-volunteer" src={vibhor} />
                    <p className="text-white name">Vibhor Jain</p>
                </div>
                <div className="volunteer">
                    <img data-aos="flip-up" className="img-volunteer" src={satyam} />
                    <p className="text-white name">Satyam Gaur</p>
                </div>
                <div className="volunteer">
                    <img data-aos="flip-up" className="img-volunteer" src={rishabh} />
                    <p className="text-white name">Rishabh Singhal</p>
                </div>
                <div className="volunteer">
                    <img data-aos="flip-up" className="img-volunteer" src={anuj} />
                    <p className="text-white name">Anuj Yadav</p>
                </div>
            </div>
            <div data-aos="fade-up" className="volunteers">
                <div className="volunteer">
                    <img data-aos="flip-up" className="img-volunteer" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                </div>
                <div className="volunteer">
                    <img data-aos="flip-up" className="img-volunteer" src={akshat} />
                    <p className="text-white name">Akshat Gupta</p>
                </div>
                <div className="volunteer">
                    <img data-aos="flip-up" className="img-volunteer" src={aseem} />
                    <p className="text-white name">Aseem Sangalay</p>
                </div>
                <div className="volunteer">
                    <img data-aos="flip-up" className="img-volunteer" src={chirag} />
                    <p className="text-white name">Chirag Garg</p>
                </div>
                <div className="volunteer">
                    <img data-aos="flip-up" className="img-volunteer" src={naman} />
                    <p className="text-white name">Naman Jain</p>
                </div>
                <div className="volunteer">
                    <img data-aos="flip-up" className="img-volunteer" src={rachit} />
                    <p className="text-white name">Rachit Parwanda</p>
                </div>
                <div className="volunteer">
                    <img data-aos="flip-up" className="img-volunteer" src={muskan} />
                    <p className="text-white name">Muskan Gupta</p>
                </div>
            </div>
        </div>
    )
}

export default volunteer;