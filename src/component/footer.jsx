import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="footer" className="footer-area">
          <div className="footer-widget pt-130 pb-130">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="footer-content text-center">
                    <a href="index.html">
                      <img src="./images/logo-2.png" alt="Logo" />
                    </a>
                    <p className="mt-">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor inci- didunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud exe-
                      rcitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.
                    </p>
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
                          <i className="lni-pinterest" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-linkedin-original" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* footer content */}
                </div>
              </div>
              {/* row */}
            </div>
            {/* container */}
          </div>
          {/* footer widget */}
          <div className="footer-copyright pb-20">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="copyright-text text-center pt-20">
                    <p>
                      Copyright © 2022.
                    </p>
                  </div>
                  {/* copyright text */}
                </div>
              </div>
              {/* row */}
            </div>
            {/* container */}
          </div>
          {/* footer widget */}
        </footer>
      </div>
    );
  }
}