import React from "react";

const SkillWordCloud = ({ skillName, skillLevel }) => {
    return (
        <span className="word" style={{ fontSize: `${skillLevel}px` }}>
            {skillName}
        </span>
    )
}

export default SkillWordCloud;