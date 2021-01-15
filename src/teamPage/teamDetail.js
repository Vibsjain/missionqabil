import React from 'react';
import "./teamDetail.css"
import Lead from './teamLead';
import Member from './teamMember';
import Volunteer from './teamVolunteer';


const teamDetail = () => {
    return(
        <div className="teamDesc">
            <h1 style={{fontWeight: "bold"}} className="display-2"><span className="o">O</span>UR <span className="o">T</span>EAM</h1>
            <Lead />
            <Member />
            <Volunteer />
        </div>
    )
}

export default teamDetail;