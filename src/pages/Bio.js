import React from "react";
import SkillBar from "../components/SkillBar";


const Bio = () => {

  const skillsArray = [
    { name: "HTML", level: 100 },
    { name: "Javascript", level: 100 },
    { name: "CSS", level: 100 },
    { name: "CSS Preprocessors", level: 100 },
    { name: "React", level: 80 },
    { name: "Angular", level: 100 },
    { name: "Vue", level: 90 },
    { name: "Vite", level: 50 },
    { name: "Webpack", level: 50 },
    { name: "Node.js", level: 100 },
    { name: "MySQL", level: 75 },
    { name: "C#", level: 75 },
    { name: "Unity", level: 90 }]
  return (
    <div className="container" id="about-me">
      <br />
      <div className="row">
        <div class="bio">
          <img
            src={`${process.env.PUBLIC_URL}/Images/headshot.jpg`}
            className="img"
            alt="Jenn Greiner headshot"
          />          <h1>Hi, I'm Jenn</h1><p>I'm a User Interface Engineer with 1+ years of experience creating user-friendly interfaces for web and mobile apps. I have a strong understanding of user experience principles and a talent for creating intuitive and visually appealing designs. I'm well-versed in HTML, CSS, JavaScript, and front-end frameworks like React and Angular. I've conducted user research and testing, and I'm familiar with agile development methodologies. I have a proven track record of delivering high-quality, responsive, and accessible interfaces that meet both business and user needs. I work well with cross-functional teams, including designers, developers, and product managers, and I love collaborating to bring great ideas to life.</p></div>
      </div>
      <div className="skillsContainer col-xs-12 d-flex justify-content-center flex-column mx-3">
        <h4>Skills</h4>
        <hr />
        {
          skillsArray.map(skill => <SkillBar skillName={skill.name} skillLevel={skill.level} />)
        }
      </div>
    </div>
  );
};

export default Bio;
