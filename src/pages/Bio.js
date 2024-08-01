import React from "react";
import SkillBar from "../components/SkillBar";
import SkillWordCloud from "../components/SkillWordCloud";


const Bio = () => {

  const skillsArray = [
    { name: "Vue", level: 100 },
    { name: "Vuetify", level: 100 },
    { name: "Vite", level: 75 },
    { name: "CI/CD", level: 60 },
    { name: "HTML", level: 100 },
    { name: "Javascript", level: 100 },
    { name: "CSS", level: 100 },
    { name: "Angular", level: 80 },
    { name: "React", level: 80 },
    { name: "Webpack", level: 50 },
    { name: "Node.js", level: 100 },
    { name: "CSS Preprocessors", level: 100 },
    { name: "MySQL", level: 65 },
    { name: "C#", level: 50 },
    { name: "Unity", level: 70 }]
  return (
    <div className="container" id="about-me">
      <div class="bio">
        {/* <img
          src={`${process.env.PUBLIC_URL}/Images/headshot.jpg`}
          className="img"
          alt="Jenn Greiner headshot"
        /> */}
        <h2>Hi, my name is</h2>
        <h1>Jenn Greiner</h1>
        <h3>
          I'm a <b>User Interface Engineer</b> specialized in building exceptional digital experiences.
        </h3>
      </div>
      <div className="skillsContainer">
        {
          skillsArray.map(skill => <SkillWordCloud skillName={skill.name} skillLevel={skill.level} />)
        }
      </div>
    </div>
  );
};

export default Bio;
