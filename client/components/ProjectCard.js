import React from "react";
import { Col } from "react-bootstrap";
import folderIcon from "../../static/img/opened_folder.svg";
import gitIcon from "../../static/img/github.svg";

const ProjectCard = props => {
  return (
    <Col lg={4} sm={6} xs={12} className="sm-col-pad">
      <div
        className="project-card"
        style={{
          height: "320px",
          marginBottom: "15px",
          padding: "20px",
          color: "#8892b0",
          borderRadius: "3px"
        }}
      >
        <div style={{ height: "20%", color: "#ec4b9a" }}>
          <div style={{ display: "inline-block" }}>
            <img src={folderIcon} className="folder-icon" />
          </div>
          <div
            style={{
              display: "inline-block",
              float: "right",
              color: "#8892b0"
            }}
          >
            <img src={gitIcon} className="git-icon" />
          </div>
        </div>
        <div style={{ height: "60%" }}>
          <div
            style={{
              color: "white",
              fontSize: "20px",
              marginBottom: "10px",
              paddingTop: "10px"
            }}
          >
            {props.project.title}
          </div>
          <div>{props.project.description}</div>
        </div>
        <div
          className="project-card-tech"
          style={{ height: "20%", alignItems: "center", display: "flex" }}
        >
          {props.project.tech}
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
