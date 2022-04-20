import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import image5 from "../../images/image5.jpg"
import image6 from "../../images/image6.jpg"
import image7 from "../../images/image7.jpg"

const Middle2 = () => {
    return (
        <div className="Middle2-layout container">
            <div className="Base">
                    <div className="text">
                        <p className="col-ms-4 text-light text-end px-5 m-auto w-50">Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. 
                            Ut enim ad minim
                        </p>
                    </div>
                    <div className="image1">
                        <img alt="image5" src={image5}></img>
                    </div>
                    <div className="image2">
                        <img alt="image5" src={image6}></img>
                        <h2>Your Next Journey</h2>
                    </div>
                    <div className="image3">
                        <img alt="image5" src={image7}></img>
                    </div>
                    <div className="title text-center bg-black">
                        <div><h2 className="text-center">View All Our References</h2></div>
                    </div>
            </div>
        </div>
    )
}

export default Middle2