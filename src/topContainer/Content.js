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


    // <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
    //     <ol className="carousel-indicators">
    //         <li data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"></li>
    //         <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
    //         <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
    //     </ol>
    //     <div className="carousel-inner">
    //         <div className="carousel-item active" data-bs-interval="10000">
    //             <img src={image} className="d-block w-100" alt="..." />
    //             <div className="carousel-caption d-none d-md-block">
    //                 <h5>First slide label</h5>
    //                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //             </div>
    //         </div>
    //         <div className="carousel-item" data-bs-interval="2000">
    //             <img src={image} className="d-block w-100" alt="..." />
    //             <div className="carousel-caption d-none d-md-block">
    //                 <h5>Second slide label</h5>
    //                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //             </div>
    //         </div>
    //         <div className="carousel-item">
    //             <img src={image} className="d-block w-100" alt="..." />
    //             <div className="carousel-caption d-none d-md-block">
    //                 <h5>Third slide label</h5>
    //                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    //             </div>
    //         </div>
    //         <div>
    //             <a className="carousel-control-prev" href="#carouselExampleDark" role="button" data-bs-slide="prev">
    //                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //                 <span className="visually-hidden">Previous</span>
    //             </a>
    //             <a className="carousel-control-next" href="#carouselExampleDark" role="button" data-bs-slide="next">
    //                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //                 <span className="visually-hidden">Next</span>
    //             </a>
    //         </div>
    //     </div>
    // </div>
  )
}

export default content;