import React from 'react';
import "./teamMember.css";
import AOS from 'aos';
import motu from "../images/motu.jpg";
import anshika from "../teamImage/anshika.jpeg";

const member = () => {

    AOS.init({
        duration: 1000
    })

    return(
        <div className="teamMembers">
            <h1>TEAM MEMBERS</h1>
            <div data-aos="fade-up" className="Members">
                <div className="Member">
                    <img className="img-member" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div> 
            </div>
            <div data-aos="fade-up" className="Members">
                <div className="Member">
                    <img className="img-member" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={anshika} />
                    <p className="text-white name">Anshika Jain</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div> 
            </div>
            <div data-aos="fade-up" className="Members">
                <div className="Member">
                    <img className="img-member" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div>
                <div className="Member">
                    <img className="img-member" src={motu} />
                    <p className="text-white name">Rahul Mahar</p>
                    <p className="text-white position">Position</p>
                </div> 
            </div>
        </div>
    )
}

export default member;