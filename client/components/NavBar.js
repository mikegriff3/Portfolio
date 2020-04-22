import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import menuIcon from "../../static/img/menu-icon.svg";

export default class NavBar extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {
      menuOpened: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
  }

  toggleMenu = () => {
    this.setState({ menuOpened: !this.state.menuOpened }, () => {
      console.log(this.state.menuOpened);
    });
  };

  renderMenu = () => {
    if (this.state.menuOpened) {
      return (
        <div style={navMenuStyle} className="nav-menu">
          <div className="nav-menu-item">Link 1</div>
          <div className="nav-menu-item">Link 2</div>
          <div className="nav-menu-item">Link 3</div>
          <div className="nav-menu-item">Link 4</div>
        </div>
      );
    }
  };

  render() {
    return (
      <Row
        style={this.props.style}
        className={this.props.className}
        id="navbar"
      >
        <Col style={navTitleStyle} className="nav-title">
          <div
            style={{
              //border: "2px solid #ec4b9a",
              paddingLeft: "15px"
              //boxShadow: "2px 2px #65e8e5"
            }}
          >
            M
          </div>
        </Col>
        <Col xs="auto" className="nav-link">
          <div>
            <a href="#project">01. Projects</a>
          </div>
        </Col>
        <Col xs="auto" className="nav-link">
          <div>
            <a href="#about">02. About</a>
          </div>
        </Col>
        <Col xs="auto" className="nav-link">
          <div>
            <a href="#contact">03. Contact</a>
          </div>
        </Col>
        <Col xs="auto" className="nav-link">
          <div
            style={{
              border: "2px solid #ec4b9a",
              padding: "10px 20px",
              color: "#ec4b9a",
              borderRadius: "3px"
            }}
          >
            Resume
          </div>
        </Col>
        <Col xs="auto" className="nav-collapse" onClick={this.toggleMenu}>
          <img className="menu-icon" src={menuIcon} />
        </Col>
        {this.renderMenu()}
      </Row>
    );
  }
}

const navMenuStyle = {
  position: "fixed",
  top: "0",
  right: "0",
  backgroundColor: "#4c5f74",
  zIndex: 5050,
  width: "40vw",
  height: "100%",
  marginTop: "90px"
};

const navTitleStyle = {
  display: "flex",
  alignItems: "center",
  height: "100%",
  color: "#ec4b9a"
};

NavBar.defaultProps = {
  className: "navbar",
  style: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    color: "white",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "90px",
    zIndex: 10000,
    paddingTop: "0",
    paddingBottom: "0"
  }
};
