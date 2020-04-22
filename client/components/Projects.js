import React from "react";
import { Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Time to Have More Fun",
    description:
      "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
    tech: "Next.js Tailwind CSS Firebase"
  },
  {
    title: "Time to Have More Fun",
    description:
      "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
    tech: "Next.js Tailwind CSS Firebase"
  },
  {
    title: "Time to Have More Fun",
    description:
      "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
    tech: "Next.js Tailwind CSS Firebase"
  },
  {
    title: "Time to Have More Fun",
    description:
      "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
    tech: "Next.js Tailwind CSS Firebase"
  },
  {
    title: "Time to Have More Fun",
    description:
      "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
    tech: "Next.js Tailwind CSS Firebase"
  },
  {
    title: "Time to Have More Fun",
    description:
      "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
    tech: "Next.js Tailwind CSS Firebase"
  }
];

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(projects);
    return (
      <Row className="projects-row">
        <Col
          md={{ span: 10, offset: 1 }}
          style={{ paddingLeft: "30px", paddingRight: "30px" }}
        >
          <div
            className="op-title"
            style={{
              margin: "0 auto",
              textAlign: "center",
              marginTop: "100px",
              color: "white"
            }}
          >
            Other Noteworthy Projects
          </div>
          <div className="git-title">View Github Profile</div>
          <Row>
            {projects.map((project, index) => {
              return <ProjectCard key={index} project={project} />;
            })}
          </Row>
        </Col>
      </Row>
    );
  }
}
