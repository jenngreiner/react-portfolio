import React from "react";

const SkillBar = ({skillName, skillLevel}) => {
    return (
        <div className="skills">
            <div className="bar" style={{width:`${skillLevel}%`}}>
                {skillName}
            </div>
        </div>
    )
} 

export default SkillBar;