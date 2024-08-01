import React from "react";
import Button from "./Button";
import PageTitle from "./PageTitle";



function ProjectCard(props) {
  console.log(props)
  // TODO: fix cards overlapping navbar when scrolling
  return (
    <div className="container">
      <div className="card-container">
        {props.projects.map(project => (
          <div className="card" key={project.id}>
            <img
              src={project.image}
              className="card-img-top"
              alt={project.name}
            />
            <div className="card-body">
              <div className="card-title">{project.name}</div>
              <p className="card-text">
                {project.description}
              </p>
              <div className="buttons">
                <Button btnName="View the App" btnHref={project.deployed} />
                {project.repo ? <Button btnName="Source Code" btnHref={project.repo} /> : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default ProjectCard;
