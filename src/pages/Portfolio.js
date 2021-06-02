import React from 'react';
import Project from "../components/Project";
import projects from "../projects.json"

function Portfolio() {
    return (
        <Project projects={projects}
      />
    )
}

export default Portfolio