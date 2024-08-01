import React from 'react';
import Jobs from '../components/Jobs';
import jobsList from "../json/jobs.json";
import "../styles/css/jobs.css"
import SkillBar from "../components/SkillBar";
import SkillWordCloud from "../components/SkillWordCloud";


function Experience() {
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
        <>
            <div className="skillsContainer">
                {
                    skillsArray.map(skill => <SkillWordCloud skillName={skill.name} skillLevel={skill.level} />)
                }
            </div>
            <Jobs jobs={jobsList} />
        </>
    );
};

export default Experience;