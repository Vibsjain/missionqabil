import React from 'react';
import "./teamVolunteer.css";
import AOS from 'aos';
import motu from "../images/motu.jpg";
import vibhor from "../teamImage/vibhor.jpeg";
import aseem from "../teamImage/aseem.jpeg";

const volunteer = () => {

    AOS.init({
        duration: 1000
    })

    return(
        <div className="teamVoluteerss">
            <h1>VOLUNTEERS</h1>
            <div data-aos="fade-up" className="volunteers">
                <div className="volunteer">
                    <img data-aos="flip-up" className="img-volunteer" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="volunteer">
                    <img data-aos="flip-up" className="img-volunteer" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="volunteer">
                    <img data-aos="flip-up" className="img-volunteer" src={vibhor} />
                    <p className="text-white name">Vibhor Jain</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="volunteer">
                    <img data-aos="flip-up" className="img-volunteer" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="volunteer">
                    <img data-aos="flip-up" className="img-volunteer" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="volunteer">
                    <img data-aos="flip-up" className="img-volunteer" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div>
            </div>
            <div data-aos="fade-up" className="volunteers">
                <div className="volunteer">
                    <img data-aos="flip-up" className="img-volunteer" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="volunteer">
                    <img data-aos="flip-up" className="img-volunteer" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="volunteer">
                    <img data-aos="flip-up" className="img-volunteer" src={aseem} />
                    <p className="text-white name">Aseem Sangalay</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="volunteer">
                    <img data-aos="flip-up" className="img-volunteer" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="volunteer">
                    <img data-aos="flip-up" className="img-volunteer" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="volunteer">
                    <img data-aos="flip-up" className="img-volunteer" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="volunteer">
                    <img data-aos="flip-up" className="img-volunteer" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div>
            </div>
        </div>
    )
}

export default volunteer;