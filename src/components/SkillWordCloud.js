import React from "react";

const SkillWordCloud = ({ skillName, skillLevel }) => {
    const fontSize = (skillLevel / 100) * 5
    return (
        <span className="word" style={{ fontSize: `${fontSize}rem` }}>
            {skillName}
        </span>
    )
}

export default SkillWordCloud;