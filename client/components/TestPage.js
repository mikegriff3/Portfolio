import React from "react";
import NavBar from "./NavBar";
import Footer from "./NavBar";
import Banner from "./Banner";
import Work from "./Work";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import { Container } from "react-bootstrap";
import gitIcon2 from "../../static/img/github.svg";
import linkedInIcon from "../../static/img/linkedin.svg";
import igIcon from "../../static/img/instagram.svg";
import twitterIcon from "../../static/img/twitter.svg";

export default class TestPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container fluid>
        <div
          className="email"
          style={{
            position: "fixed",
            bottom: "-25px",
            right: "30px",
            textOrientation: "sideways-right"
          }}
        >
          <div style={{ display: "inline-block", paddingRight: "20px" }}>
            mikegriff951@gmail.com
          </div>
          <div
            style={{
              display: "inline-block",
              width: "100px",
              height: "1px",
              backgroundColor: "#8892b0",
              marginBottom: "3px"
            }}
          />
        </div>
        <div
          className="sm-icons"
          style={{
            position: "fixed",
            bottom: "-25px",
            left: "30px",
            textOrientation: "sideways-right"
          }}
        >
          <div
            style={{
              display: "inline-block",
              width: "100px",
              height: "1px",
              backgroundColor: "#8892b0",
              marginBottom: "3px"
            }}
          />
          <div style={{ display: "inline-block", paddingLeft: "25px" }}>
            <img src={twitterIcon} className="twitter-icon" />
            <img src={igIcon} className="ig-icon" />
            <img src={linkedInIcon} className="linkedin-icon" />
            <img src={gitIcon2} className="git-icon2" />
          </div>
        </div>
        <NavBar />
        <Banner />
        <Work />
        <Projects />
        <About />
        <Contact />
        {/*<Footer />*/}
      </Container>
    );
  }
}
