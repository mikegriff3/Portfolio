import React from "react";
import { Row, Col } from "react-bootstrap";
import profilePic from "../../static/img/griff.png";

export default class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Row className="about-row" id="about">
        <Col md={{ span: 8, offset: 2 }} className="no-col-pad">
          <div className="about-title">02. About Me</div>
          <Row>
            <Col md={8} className="no-col-pad">
              <div style={{ paddingRight: "100px", color: "#8892b0" }}>
                Hello! I'm Mike, a software engineer based in Santa Monica, CA.
                <br />
                <br /> I enjoy creating things that live on the internet,
                whether that be websites, applications, or anything in between.
                My goal is to always build products that provide pixel-perfect,
                performant experiences.
                <br />
                <br /> Shortly after graduating from Arizona State University, I
                joined the engineering team at Upstatement where I work on a
                wide variety of interesting and meaningful projects on a daily
                basis.
                <br />
                <br /> Here are a few technologies I've been working with
                recently:
              </div>
              <ul className="about-tech" style={{ padding: "20px" }}>
                <li>Javascript &#40;ES6+&#41;</li>
                <li>React</li>
                <li>Node.js</li>
                <li>HTML & &#40;S&#41;CSS</li>
                <li>Machine Learning</li>
                <li>React Native</li>
              </ul>
            </Col>
            <Col md={4} className="no-col-pad">
              <div
                style={{
                  position: "relative",
                  width: "200px",
                  margin: "15px"
                }}
              >
                <img
                  src={profilePic}
                  className="profile-pic"
                  style={{
                    width: "100%",
                    height: "auto",
                    zIndex: "10000",
                    borderRadius: "3px"
                  }}
                />
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "transparent",
                    position: "absolute",
                    top: "10%",
                    right: "-10%",
                    border: "3px solid #65e8e5",
                    zIndex: "100",
                    borderRadius: "3px"
                  }}
                ></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
