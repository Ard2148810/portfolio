import React from "react";
import "../../style/Content.sass"
import { Switch, Route } from "react-router-dom"

class Content extends React.Component<{}, {}> {
    render() {
        return (
            <div className="content">
                <Switch>
                    <Route path="/skills">
                        Skills...
                    </Route>
                    <Route path="/contact">
                        Contact...
                    </Route>
                    <Route path="*">
                        About me...
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default Content;