import React from "react";
import Button from "./Button";
import PageTitle from "./PageTitle";

const styles = {
  img: {
    height: 150,
  },
  card: {
    width: "20rem",
    margin: 20
  },
};


function Project(props) {
  console.log(props)
  // TODO: fix cards overlapping navbar when scrolling
  return (
    <div className="container" id="portfolio">

      <div className="card-container">
        {props.projects.map(project => (
          <div className="col-sm-4">
            <div className="card" style={styles.card} key={project.id}>
              <img
                src={project.image}
                style={styles.img}
                className="card-img-top"
                alt={project.name}
              />
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">
                  {project.description}
                </p>
                <div className="row">
                  <div className="col-6">
                    <Button btnName="View the App" btnHref={project.deployed} />
                  </div>
                  <div className="col-6">
                    {project.repo ? <Button btnName="Source Code" btnHref={project.repo} /> : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Project;
