import React from "react";
import { Row, Col } from "react-bootstrap";

export default class Contact extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Row className="contact-row" id="contact">
        <Col sm={{ span: 6, offset: 3 }}>
          <div style={{ textAlign: "center", margin: "0 auto" }}>
            <div className="contact-title">03. What's Next?</div>
            <div className="get-in-touch">Get In Touch</div>
            <div style={{ color: "#8892b0", marginTop: "10px" }}>
              Although I'm not currently looking for any new opportunities, my
              inbox is always open. Whether you have a question or just want to
              say hi, I'll try my best to get back to you!
            </div>
            <div
              className="hello-button"
              style={{
                display: "inline-block",
                marginTop: "60px",
                border: "2px solid #ec4b9a",
                marginBottom: "200px",
                padding: "15px 20px 15px 20px",
                borderRadius: "3px"
              }}
            >
              Say Hello
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}
