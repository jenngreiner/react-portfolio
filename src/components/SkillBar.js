import React from "react";

const SkillBar = ({skillName, skillLevel}) => {
    return (
        <div className="skills">
            <div className="bar" style={{width:`${skillLevel}%`}}>
            <div className="skillDetails">{skillName}</div>
            <div className="skillDetails skillLevel">{skillLevel}%</div>    
            </div>
        </div>
    )
} 

export default SkillBar;