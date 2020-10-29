import React from "react";

type SkillItemProps = {
    text: string,
    color: number
}

const SkillItem = ({ text, color }: SkillItemProps)  => {
    return (
        <div className={`skill-item skill-item-${color}`} >
            <p>{text}</p>
        </div>
    )
}

export default SkillItem;