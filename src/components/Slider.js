import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'


const Slider = () => {
    const fadeImages = [
        {
            id: 0,
            image: image1,
            caption: 'First Text'
        },
        {
            id: 1,
            image: image2,
            caption: 'Second Text'
        },
        {
            id: 2,
            image: image3,
            caption: 'Third Text'
        },
    ]
    const fadeProperties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: false,
      }
    return (
        <div className="slide-container">
            <Fade {...fadeProperties}>
                {fadeImages.map((fadeImage, index) => {
                    return (
                        <div>
                            <div id={fadeImage.id} className="each-fade" key={index}>
                                <div className="image-container">

                                    <img alt="pic" src={fadeImage.image} />
                                </div>
                                <h2>{fadeImage.caption}</h2>
                            </div>
                        </div>
                    )
                })}
            </Fade>
        </div >
    )

}

export default Slider;