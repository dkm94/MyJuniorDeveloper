
import React from 'react';
// import { Slide } from 'react-slideshow-image';
import "./Slidecard.css";

const Slideshow = (props) => {

    return (
      <div className="card-text container-fluid">
          <div className="each-slide">
                    <h1 className="username">{props.name}</h1>
                    <h2 className="userjob">{props.job}</h2>
                    <p>{props.bio}</p> 
          </div>
          <div className="each-slide">
            <h1>{props.time}</h1>
          </div>
          <div className="each-slide">
          <h1 className="username">Projets</h1>      
          </div>
      </div>
    
    )
};

export default Slideshow;