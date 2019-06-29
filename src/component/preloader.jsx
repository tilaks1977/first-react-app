import React, { Component } from "react";

export default class Preloader extends Component {
  render() {
    return (
      <div>
        <div class="preloader">
          <div class="loader_34">
            <div class="ytp-spinner">
              <div class="ytp-spinner-container">
                <div class="ytp-spinner-rotator">
                  <div class="ytp-spinner-left">
                    <div class="ytp-spinner-circle"></div>
                  </div>
                  <div class="ytp-spinner-right">
                    <div class="ytp-spinner-circle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}