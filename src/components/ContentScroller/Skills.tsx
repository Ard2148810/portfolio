import React from "react";
import "../../style/Skills.sass"
import SkillItem from "../../style/SkillItem";

class Skills extends React.Component<{}, {}>{
    render() {
        return (
            <div className="content-skills">
                <div className="skill-item-container">
                    <SkillItem text={"JavaScript"} color={2}/>
                    <SkillItem text={"React"} color={3}/>
                    <SkillItem text={"CSS/SASS"} color={1}/>
                    <SkillItem text={"TypeScript"} color={4}/>
                    <SkillItem text={"ES6"} color={2}/>
                    <SkillItem text={"Node.js"} color={3}/>
                    <SkillItem text={"RWD"} color={1}/>
                    <SkillItem text={"SQL"} color={2}/>
                    <SkillItem text={"REST"} color={1}/>
                    <SkillItem text={"Java"} color={4}/>
                    <SkillItem text={"Etc."} color={3}/>
                </div>
            </div>
        )
    }
}

export default Skills;
