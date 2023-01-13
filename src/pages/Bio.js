import React from "react";
import SkillBar from "../components/SkillBar";


const Bio = () => {

  const skillsArray = [
    {name:"HTML", level: 100}, 
    {name:"Javascript", level: 100}, 
    {name:"CSS", level: 100}, 
    {name:"CSS Preprocessors", level: 100}, 
    {name:"React", level: 80}, 
    {name:"Angular", level: 100}, 
    {name:"Vue", level: 90}, 
    {name:"Vite", level: 50}, 
    {name:"Webpack", level: 50}, 
    {name:"Node.js", level: 100}, 
    {name:"MySQL", level: 75}, 
    {name:"C#", level: 75}, 
    {name:"Unity", level: 90}]
  return (
      <div className="container" id="about-me">
        <br />
        <div className="row">
          <div className="col-xs-12 d-flex justify-content-center" id="about-me">
            <img
              src={`${process.env.PUBLIC_URL}/Images/headshot.jpg`}
              className="img"
              alt="Jenn Greiner headshot"
            />
            <div className="align-self-center">
              <h1>Hi, I'm Jenn</h1>
              <h2>User Interface Engineer</h2>
            </div>
          </div>
        </div>
        <div className="skillsContainer col-xs-12 d-flex justify-content-center flex-column mx-3">
              <h4>Skills</h4>
              {
                skillsArray.map(skill => <SkillBar skillName={skill.name} skillLevel={skill.level}/>)
              }
            </div>
      </div>
  );
};

export default Bio;
