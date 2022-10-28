import React, { Component } from 'react';

class Video extends Component {
    render() { 
        return (
    <div className="hide-mob">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <video id="video-bg" width="" height="" autoplay muted loop>
              <source src="assets/img/bg1.mp4" type="video/mp4"/>
            </video>
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
      </div>
    </div>
        );
    }
}
 
export default Video;