import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header id="home" className="header-area">
          <div className="navigation fixed-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="index.html">
                      <img src="./images/logo.png" alt="Logo" />
                    </a>
                    {/* Logo */}
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="toggler-icon" />
                      <span className="toggler-icon" />
                      <span className="toggler-icon" />
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                          <a className="page-scroll" href="#home">
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="#about">
                            About
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="#service">
                            Services
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="#work">
                            Work
                          </a>
                        </li>
                        {/*<li className="nav-item">
                          <a className="page-scroll" href="#blog">
                            Blog
                          </a>
                        </li>*/}
                        <li className="nav-item">
                          <a className="page-scroll" href="#contact">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* navbar collapse */}
                  </nav>
                  {/* navbar */}
                </div>
              </div>
              {/* row */}
            </div>
            {/* container */}
          </div>
          {/* navigation */}
          <div
            id="parallax"
            className="header-content d-flex align-items-center"
          >
            <div className="header-shape shape-one layer" data-depth="0.10">
              <img src="./images/banner/shape/shape-1.png" alt="Shape" />
            </div>
            {/* header shape */}
            <div className="header-shape shape-tow layer" data-depth="0.30">
              <img src="./images/banner/shape/shape-2.png" alt="Shape" />
            </div>
            {/* header shape */}
            <div className="header-shape shape-three layer" data-depth="0.40">
              <img src="./images/banner/shape/shape-3.png" alt="Shape" />
            </div>
            {/* header shape */}
            <div className="header-shape shape-fore layer" data-depth="0.60">
              <img src="./images/banner/shape/shape-2.png" alt="Shape" />
            </div>
            {/* header shape */}
            <div className="header-shape shape-five layer" data-depth="0.20">
              <img src="./images/banner/shape/shape-1.png" alt="Shape" />
            </div>
            {/* header shape */}
            <div className="header-shape shape-six layer" data-depth="0.15">
              <img src="./images/banner/shape/shape-4.png" alt="Shape" />
            </div>
            {/* header shape */}
            <div className="header-shape -seven layer" data-depth="0.50">
              <img src="./images/banner/shape/shape-5.png" alt="Shape" />
            </div>
            {/* header shape */}
            <div className="header-shape shape-eight layer" data-depth="0.40">
              <img src="./images/banner/shape/shape-3.png" alt="Shape" />
            </div>
            {/* header shape *}
            <div className="header-shape shape-nine layer" data-depth="0.20">
              <img src="./images/banner/shape/shape-6.png" alt="Shape" />
            </div>{" "}
            {/* header shape */}
            <div className="header-shape shape-ten layer" data-depth="0.30">
              <img src="./images/banner/shape/shape-3.png" alt="Shape" />
            </div>
            {/* header shape */}
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-5 col-lg-6">
                  <div className="header-content-right">
                    <h4 className="sub-title">Hello, I’m</h4>
                    <h1 className="title">Tilak Sanyal</h1>
                    <p>An Experienced UI Designer &amp; Web Developer</p>
                    <a className="main-btn" href="#work">
                      View my Work
                    </a>
                  </div>
                  {/* header content right */}
                </div>
                <div className="col-lg-6 offset-xl-1">
                  <div className="header-image d-none d-lg-block">
                    <img src="./images/banner/hero.png" alt="hero" />
                  </div>
                  {/* header image */}
                </div>
              </div>
              {/* row */}
            </div>
            {/* container */}
            <div className="header-social">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="header-social-icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="lni-facebook-filled" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="lni-twitter-original" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="lni-behance-original" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="lni-linkedin-original" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* header social */}
                  </div>
                </div>
                {/* row */}
              </div>
              {/* container */}
            </div>
            {/* header social */}
          </div>
        </header>
      </div>
    );
  }
}
