import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";

const Middle = () =>{
    
    const settings = {
        controls: true,
        url: "https://www.youtube.com/watch?v=ojEzYJlW5Xc",
        light: true,
        playIcon: <FontAwesomeIcon icon={faPlay} id="hover" className="text-light" size="5x"></FontAwesomeIcon>
    }


    return (
        <div className="Middle container">
            <div className="rect">
                <div className="video">
                    <span><h3>DIGITAL SHOWREEL</h3></span>
                    <ReactPlayer {...settings}>
                    </ReactPlayer>
                </div>
            </div>
        </div>
    )
}

export default Middle