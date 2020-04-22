import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import BannerImg from "../../static/img/background7.png";

// const mapStateToProps = state => {
//   return {};
// };

// const mapDispatchToProps = dispatch => {
//   return {};
// };

export default class Banner extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Row
        style={{
          paddingTop: "120px",
          backgroundImage: `url(${BannerImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: "0.9"
        }}
      >
        <Col md={{ span: 8, offset: 2 }}>
          <div className="banner" style={{ height: "100vh" }}>
            <h1 style={{ marginLeft: "3px" }}>Hello, my name is</h1>
            <h2>Michael Griffin.</h2>
            <h3>I build things for the web.</h3>
            <p style={{ width: "65%", marginTop: "50px", fontSize: "18px" }}>
              I'm a software engineer based in Santa Monica, CA specializing in
              building and designing exceptional, high-quality websites and
              applications.
            </p>
            <div
              className="contact-button"
              style={{
                marginTop: "60px",
                border: "3px solid #65e8e5",
                display: "inline-block",
                padding: "10px 20px 10px 20px",
                color: "#65e8e5"
              }}
            >
              Get In Touch
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

const bannerStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100vh",
  backgroundSize: "cover"
};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Banner);
