import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;
    const description2 = this.props.data.description2;

    return (
      <header id="home">
        <ParticlesBg type="lines" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Sqlana
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#tokenomics">
                Tokenomics
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#roadmap">
                Roadmap
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#disclaimer">
                Disclaimer
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
              <h3>{description2}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                {/* <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>Project
                </a> */}
                <a href="https://www.dexlab.space/token/2FcAtfp16b7NoEzJMbY4jLnyLcUANqFV19oBCKbzTe5Q " className="button btn">
                  Trade $SQL at DexLab
                  {/* <i className="fa fa-github"></i>Github */}
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
