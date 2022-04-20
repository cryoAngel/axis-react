import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import Slider from "./Slider";
import Middle from "./body-components/Middle";
import Head from "./body-components/Head";
import Middle2 from "./body-components/Middle2";
import Contact from "./body-components/Contact";
import Footer from "./body-components/Footer";

const Header = () => {


  window.onscroll = function () {
    ScrollIndicator()
  };

  function ScrollIndicator() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = ((winScroll - 10 )/ height) * 100 + 5;
    document.getElementById("scroll").style.width = scrolled + "%";
    
  }
  return (
    <header>
      <nav class="navbar navbar-expand-lg custom-trasparent fixed-top mask-custom shadow-0">
        <div class="container">
          <a class="navbar-brand" href="#"><span>Logo</span></a>
          <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto">
              <div id="dash-1"></div>
              <li class="nav-item">
                <a class="nav-link" href="#Middle">Welcome Showreel</a>
              </li>
              <div id="dash-2"></div>
              <li class="nav-item">
                <a class="nav-link" href="#Middle2">Business Areas</a>
              </li>
              <div id="dash-3"></div>
              <li class="nav-item">
                <a class="nav-link" href="#Middle-end">Contact</a>
              </li>
            </ul>
            <ul class="navbar-nav d-flex flex-row">
              <li class="nav-item me-3 me-lg-0">
                <a class="nav-link" href="#!">
                  IT
                </a>
              </li>
              <div id="dash-lang"></div>
              <li class="nav-item me-3 me-lg-0">
                <a class="nav-link" href="#!">
                  ENG
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {

      }
      <div id="header">
        <div class="progress-container">
          <div class="progress-bar" id="scroll"></div>
        </div>
      </div>
      <section>
        <div id="intro">
          <Slider />
        </div>
        <div className="Body">
          <div id="Head">
            <Head />
          </div>
          <div id="Middle">
            <Middle />
          </div>
          <div id="Middle2">
            <Middle2 />
          </div>
          <div id="Middle-end">
            <Contact />
          </div>
          <div id="Footer">
            <Footer />
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header