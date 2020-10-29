import React from "react";
import "../../style/About.sass"

class About extends React.Component<{}, {}> {
    render() {
        return (
            <div className="content-about">
                <div className="about-wrapper">
                <h2>Hello!</h2>
                <p>
                    I'm Computer Science student (7th semester) at Technological University of Lodz. My programming
                    story begins in 2013 when I have learnt my first programming language – C++. It was the time when
                    I realised how huge is the potential in programming. Lately I've been focusing on modern front-end
                    technologies like React, TypeScript or SASS.
                </p>
                <p>
                    My fields of interest are very wide, they cover psychology, economy, technology and many
                    more. My favourite sport is table tennis but I also like running.
                </p>
                </div>
            </div>
        )
    }
}

export default About
