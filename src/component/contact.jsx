import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <section id="contact" className="contact-area pt-125 pb-130 gray-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center pb-25">
                  <h2 className="title">Get In Touch</h2>
                  <p>
                    Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam
                    tempus, nunc id efficitur sagittis, urna est ultricies eros,
                    ac porta sem turpis quis leo.
                  </p>
                </div>
                {/* section title */}
              </div>
            </div>
            {/* row */}
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-7">
                <div className="contact-box text-center mt-30">
                  <div className="contact-icon">
                    <i className="lni-map-marker" />
                  </div>
                  <div className="contact-content">
                    <h6 className="contact-title">Address</h6>
                    <p>
                      VIP Residency, Kaikhali, Ghoshpara, Kolkata 700136
                    </p>
                  </div>
                </div>
                {/* contact box */}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-7">
                <div className="contact-box text-center mt-30">
                  <div className="contact-icon">
                    <i className="lni-phone" />
                  </div>
                  <div className="contact-content">
                    <h6 className="contact-title">Phone</h6>
                    <p>+91 8377831606</p>
                    <p>+91 8697904950</p>
                  </div>
                </div>
                {/* contact box */}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-7">
                <div className="contact-box text-center mt-30">
                  <div className="contact-icon">
                    <i className="lni-envelope" />
                  </div>
                  <div className="contact-content">
                    <h6 className="contact-title">Email</h6>
                    <p>tilak.sanyal@gmail.com</p>
                    <p>info@xyz.com</p>
                  </div>
                </div>
                {/* contact box */}
              </div>
            </div>
            {/* row */}
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-form pt-30">
                  <form id="contact-form" action="#">
                    <div className="single-form">
                      <input type="text" name="name" placeholder="Name" />
                    </div>
                    {/* single form */}
                    <div className="single-form">
                      <input type="email" name="email" placeholder="Email" />
                    </div>
                    {/* single form */}
                    <div className="single-form">
                      <textarea
                        name="message"
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    {/* single form */}
                    <p className="form-message" />
                    <div className="single-form">
                      <button className="main-btn" type="submit">
                        Send Message
                      </button>
                    </div>
                    {/* single form */}
                  </form>
                </div>
                {/* contact form */}
              </div>
              <div className="col-lg-6">
                <div className="contact-map mt-60">
                  <div className="gmap_canvas">
                    <iframe
                      id="gmap_canvas"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.6271121457183!2d88.43532162916593!3d22.634823936880295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e35e6d65d7d%3A0x33bf6f40c312e370!2sVIP+Residency!5e0!3m2!1sen!2sin!4v1561802351657!5m2!1sen!2sin"
                      frameBorder={0}
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}
                    />
                  </div>
                </div>
                {/* contact map */}
              </div>
            </div>
            {/* row */}
          </div>
          {/* container */}
        </section>
      </div>
    );
  }
}