import React from "react";
import { Row, Col } from "react-bootstrap";
import Image1 from "../../static/img/background7.png";
import bbscoutImage from "../../static/img/bbscout.png";
import syrupImage from "../../static/img/syrup.png";
import printprosImage from "../../static/img/printpros.png";
import gitIcon3 from "../../static/img/github.svg";

export default class Work extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Row className="work-row" id="project">
        <Col md={{ span: 8, offset: 2 }} className="no-col-pad">
          <div
            className="section-title"
            style={{ marginTop: "60px", marginBottom: "60px" }}
          >
            01. Some Things I've Built
          </div>
          <Row style={{ marginBottom: "120px" }}>
            <Col md={7} className="no-col-pad">
              <div
                style={{
                  //backgroundColor: "red",
                  height: "300px",
                  width: "100%",
                  height: "350px"
                }}
              >
                <img
                  src={bbscoutImage}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "3px"
                  }}
                />
              </div>
            </Col>
            <Col md={5} className="no-col-pad">
              <div className="feat-proj" style={{ textAlign: "right" }}>
                Featured Project
              </div>
              <div className="project-title" style={{ textAlign: "right" }}>
                BB Scout
              </div>
              <div
                style={{
                  backgroundColor: "#0c0d1c",
                  width: "-110%",
                  textAlign: "right",
                  zIndex: 20000,
                  marginLeft: "-15%",
                  padding: "20px",
                  color: "#8892b0",
                  borderRadius: "3px"
                }}
              >
                A nicer look at your GitHub profile and repo stats. Includes
                data visualizations of your top languages, starred repositories,
                and sort through your top repos by number of stars, forks, and
                size.
              </div>
              <div className="tech-list">
                ReactJS PostgreSQl Node Express Highcharts
              </div>
              <div className="ghub-link">
                <img src={gitIcon3} className="git-icon3" />
              </div>
            </Col>
          </Row>
          <Row style={{ marginBottom: "120px" }}>
            <Col md={5} className="no-col-pad">
              <div className="feat-proj">Featured Project</div>
              <div className="project-title">Print Pros</div>
              <div
                style={{
                  backgroundColor: "#0c0d1c",
                  width: "-110%",
                  //textAlign: "right",
                  zIndex: 20000,
                  marginRight: "-15%",
                  padding: "20px",
                  color: "#8892b0",
                  position: "relative",
                  borderRadius: "3px"
                }}
              >
                A nicer look at your GitHub profile and repo stats. Includes
                data visualizations of your top languages, starred repositories,
                and sort through your top repos by number of stars, forks, and
                size.
              </div>
              <div className="tech-list" style={{ textAlign: "left" }}>
                ReactJS PostgreSQl Node Express Highcharts
              </div>
              <div className="ghub-link" style={{ textAlign: "left" }}>
                <img src={gitIcon3} className="git-icon3" />
              </div>
            </Col>
            <Col md={7} className="no-col-pad">
              <div
                style={{
                  //backgroundColor: "red",
                  height: "300px",
                  width: "100%",
                  height: "350px"
                }}
              >
                <img
                  src={printprosImage}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "3px",
                    padding: "20px"
                  }}
                />
              </div>
            </Col>
          </Row>
          <Row style={{ marginBottom: "100px" }}>
            <Col md={7} className="no-col-pad">
              <div
                style={{
                  //backgroundColor: "red",
                  height: "300px",
                  width: "100%",
                  height: "350px"
                }}
              >
                <img
                  src={syrupImage}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "3px"
                  }}
                />
              </div>
            </Col>
            <Col md={5} className="no-col-pad">
              <div className="feat-proj" style={{ textAlign: "right" }}>
                Featured Project
              </div>
              <div className="project-title" style={{ textAlign: "right" }}>
                Syrup
              </div>
              <div
                style={{
                  backgroundColor: "#0c0d1c",
                  width: "-110%",
                  textAlign: "right",
                  zIndex: 20000,
                  marginLeft: "-15%",
                  padding: "20px",
                  color: "#8892b0",
                  borderRadius: "3px"
                }}
              >
                A nicer look at your GitHub profile and repo stats. Includes
                data visualizations of your top languages, starred repositories,
                and sort through your top repos by number of stars, forks, and
                size.
              </div>
              <div className="tech-list">ReactJS PostgreSQl Node Express</div>
              <div className="ghub-link">
                <img src={gitIcon3} className="git-icon3" />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
