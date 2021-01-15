import React from 'react';
import './Content.css';
import learningImage from '../images/learning.jpg'
import communityImage from '../images/community.jpg'
import analyticsImage from '../images/analytics.jpg'

const content = () => {
  const changeBackground = (num) => {
    let images = [learningImage, communityImage, analyticsImage];
    const topContent = document.getElementById('top-content');
    topContent.style.background = "url(\'" + images[num] + "\')"
    // topContent.style.backgroundSize = "100% 100%"
  }

  return (
    <div id="top-content">
      <div id='top-header'>
        <h1>Missi<span className="o">o</span>n <span className="o">Q</span>abil</h1>
      </div>

      <div id='hovering-row' className='row'>
        <div className='col-4'>
          <p className='hover-p' onMouseEnter={() => changeBackground(0)}>
            <h5>Learning</h5>
            <p className="small-p">This phase is crucial as it involves rigorous training sessions. Students will be allotted homework by their respective mentors regularly. The team will work strenuously, improving the technical skills of the individual student.</p>
          </p>
        </div>

        <div className='col-4'>
          <p className='hover-p' onMouseEnter={() => changeBackground(1)}>
            <h5>Community</h5>
            <p className="small-p">We will build an online and offline community for the differently-abled. The students will receive One-on-One mentorship to resolve their problems concerning personal and academics.</p>
          </p>
        </div>

        <div className='col-4'>
          <p className='hover-p' onMouseEnter={() => changeBackground(2)}>
            <h5>Analytics</h5>
            <p className="small-p">The analytics team will analyze the performance based on the pace at which a particular student completes his/her task and will design their task accordingly. This will reduce stress and will help students to grow at their own pace to achieve better results.</p>
          </p>
        </div>
      </div>
    </div>
  )
}

export default content;