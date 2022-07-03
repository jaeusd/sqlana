import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>YOUR NEW FAVORITE DOWNTIME TOKEN</h2>

              <p></p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>What is SQLANA?</h2>
                  <p>Sqlana(SQL) is a Solana Downtime meme token powered by community and unique burning mechanism. </p>
                  <h2>UNIQUE BURN MECHANISM</h2>
                  <p>Unlike other meme tokens, we have a unique burning mechanism. We burn 1% of the total circulating supplies every time when Solana experiences a downtime. We will also burn an additional 0.5% when Solana's TPS goes down below Ethereum's TPS. If Solana is better than this should not happen, right?   </p>
                </div>
   
                {/* <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
