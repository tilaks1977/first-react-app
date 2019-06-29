import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section id="about" className="about-area pt-125 pb-130">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center">
                  <h2 className="title">About Me</h2>
                  <p>
                    Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam
                    tempus, nunc id efficitur sagittis, urna est ultricies eros,
                    ac porta sem turpis quis leo.
                  </p>
                </div>{" "}
                {/* section title */}
              </div>
            </div>{" "}
            {/* row */}
            <div className="row">
              <div className="col-lg-6">
                <div className="about-content mt-50">
                  <h5 className="about-title">Hi There! I'm Tilak Sanyal</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <ul className="clearfix">
                    <li>
                      <div className="single-info d-flex align-items-center">
                        <div className="info-icon">
                          <i className="lni-calendar" />
                        </div>
                        <div className="info-text">
                          <p>
                            <span>Date of birth:</span> 31 January 1977
                          </p>
                        </div>
                      </div>{" "}
                      {/* single info */}
                    </li>
                    <li>
                      <div className="single-info d-flex align-items-center">
                        <div className="info-icon">
                          <i className="lni-envelope" />
                        </div>
                        <div className="info-text">
                          <p>
                            <span>Email:</span> tilak.sanyal@gmail.com
                          </p>
                        </div>
                      </div>{" "}
                      {/* single info */}
                    </li>
                    <li>
                      <div className="single-info d-flex align-items-center">
                        <div className="info-icon">
                          <i className="lni-phone-handset" />
                        </div>
                        <div className="info-text">
                          <p>
                            <span>Phone:</span> +91-837-783-1606
                          </p>
                        </div>
                      </div>{" "}
                      {/* single info */}
                    </li>
                    <li>
                      <div className="single-info d-flex align-items-center">
                        <div className="info-icon">
                          <i className="lni-map-marker" />
                        </div>
                        <div className="info-text">
                          <p>
                            <span>Location:</span> Kolkata, India
                          </p>
                        </div>
                      </div>{" "}
                      {/* single info */}
                    </li>
                  </ul>
                </div>{" "}
                {/* about content */}
              </div>
              <div className="col-xl-5 offset-xl-1 col-lg-6">
                <div className="about-skills pt-25">
                  <div className="skill-item mt-25">
                    <div className="skill-header">
                      <h6 className="skill-title">HTML</h6>
                      <div className="skill-percentage">
                        <div className="count-box counted">
                          <span className="counter">80</span>
                        </div>
                        %
                      </div>
                    </div>
                    <div className="skill-bar">
                      <div className="bar-inner">
                        <div className="bar progress-line" data-width={80} />
                      </div>
                    </div>
                  </div>{" "}
                  {/* skill item */}
                  <div className="skill-item mt-25">
                    <div className="skill-header">
                      <h6 className="skill-title">CSS</h6>
                      <div className="skill-percentage">
                        <div className="count-box counted">
                          <span className="counter">60</span>
                        </div>
                        %
                      </div>
                    </div>
                    <div className="skill-bar">
                      <div className="bar-inner">
                        <div className="bar progress-line" data-width={60} />
                      </div>
                    </div>
                  </div>{" "}
                  {/* skill item */}
                  <div className="skill-item mt-25">
                    <div className="skill-header">
                      <h6 className="skill-title">JavaScript</h6>
                      <div className="skill-percentage">
                        <div className="count-box counted">
                          <span className="counter">60</span>
                        </div>
                        %
                      </div>
                    </div>
                    <div className="skill-bar">
                      <div className="bar-inner">
                        <div className="bar progress-line" data-width={60} />
                      </div>
                    </div>
                  </div>{" "}
                  {/* skill item */}
                  <div className="skill-item mt-25">
                    <div className="skill-header">
                      <h6 className="skill-title">React</h6>
                      <div className="skill-percentage">
                        <div className="count-box counted">
                          <span className="counter">50</span>
                        </div>
                        %
                      </div>
                    </div>
                    <div className="skill-bar">
                      <div className="bar-inner">
                        <div className="bar progress-line" data-width={50} />
                      </div>
                    </div>
                  </div>{" "}
                  {/* skill item */}
                </div>{" "}
                {/* about skills */}
              </div>
            </div>{" "}
            {/* row */}
          </div>{" "}
          {/* container */}
        </section>
      </div>
    );
  }
}
