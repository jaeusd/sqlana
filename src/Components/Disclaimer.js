import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Disclaimer extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.headquarters;
    // const street = this.props.data.address.street;
    // const city = this.props.data.address.city;
    // const state = this.props.data.address.state;
    // const zip = this.props.data.address.zip;
    // const phone = this.props.data.phone;
    const message = this.props.data.disclaimer;
    const email = this.props.data.email;
    const tokenAddress = this.props.data.tokenAddress;

    return (
      <section id="disclaimer">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Disclaimer.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Disclaimer;
