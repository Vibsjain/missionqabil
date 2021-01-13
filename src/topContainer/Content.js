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
  }

  return (
    <div id="top-content">
      <div id='top-header'>
        <h1>Mission Qabil</h1>
      </div>

      <div id='hovering-row' className='row'>
        <div className='col-4'>
          <p className='hover-p' onMouseEnter={() => changeBackground(0)}>
            <h5>Learning</h5>
            <p>Blah Blah Blah</p>
          </p>
        </div>

        <div className='col-4'>
          <p className='hover-p' onMouseEnter={() => changeBackground(1)}>
            <h5>Community</h5>
            <p>Blah Blah Blah</p>
          </p>
        </div>

        <div className='col-4'>
          <p className='hover-p' onMouseEnter={() => changeBackground(2)}>
            <h5>Analytics</h5>
            <p>Blah Blah Blah</p>
          </p>
        </div>
      </div>
    </div>
  )
}

export default content;