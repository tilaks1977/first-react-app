import React, { Component } from "react";

export default class Cta extends Component {
  render() {
    return (
      <div>
        <section
          id="call-to-action"
          className="call-to-action pt-125 pb-130 bg_cover"
          style={{ backgroundImage: "url(assets/images/call-to-action.jpg)" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-9">
                <div className="call-action-content text-center">
                  <h2 className="action-title">Have any project on mind?</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua nostrud.
                  </p>
                  <ul>
                    <li>
                      <a className="main-btn custom" href="#">
                        download cv
                      </a>
                    </li>
                    <li>
                      <a className="main-btn custom-2" href="#">
                        hire me
                      </a>
                    </li>
                  </ul>
                </div>{" "}
                {/* call action content */}
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