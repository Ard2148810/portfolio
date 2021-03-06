import React from "react";
import "../../style/Content.sass"
import { Switch, Route } from "react-router-dom"
import Contact from "./Contact";
import Skills from "./Skills";
import About from "./About";

class Content extends React.Component<{}, {}> {
    render() {
        return (
            <div className="content">
                <Switch>
                    <Route path="/skills">
                        <Skills/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="*">
                        <About/>
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default Content;