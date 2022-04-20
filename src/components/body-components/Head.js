import React from "react";
import image4 from "../../images/image4.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'


const Head = () => {
    return (
        <div id="Head" className="Head container">
            <div className="text-logo">
                <span>
                    <h2>Logo</h2>
                </span>
                <img alt="head" src={image4}></img>
            </div>
            <div className="container-text0">
                <p className="text-white text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <a href="./yourfile.pdf" download> DOWNLOAD BROCHURE</a>
                </p>
            </div>
        </div>
    )
}

export default Head