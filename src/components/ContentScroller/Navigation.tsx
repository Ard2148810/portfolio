import React from "react";
import "../../style/Navigation.sass"
import NavigationItem from "./NavigationItem";
import { NavigationItemPosition } from "./NavigationScrollerTypes";
import {Route, Switch} from "react-router-dom";

type NavigationState = {}

type NavigationProps = {}

class Navigation extends React.Component<NavigationProps, NavigationState> {
    render() {
        return (
            <nav className="navigation">
                <ul className="nav-list">
                    <Switch>
                        <Route path="/skills">
                            <NavigationItem label={"About me"} url={"/about-me"} position={NavigationItemPosition.Start} active={false}/>
                            <NavigationItem label={"Skills"} url={"/skills"} position={NavigationItemPosition.Middle} active={true}/>
                            <NavigationItem label={"Contact"} url={"/contact"} position={NavigationItemPosition.End} active={false}/>
                        </Route>
                        <Route path="/contact">
                            <NavigationItem label={"About me"} url={"/about-me"} position={NavigationItemPosition.Start} active={false}/>
                            <NavigationItem label={"Skills"} url={"/skills"} position={NavigationItemPosition.Middle} active={false}/>
                            <NavigationItem label={"Contact"} url={"/contact"} position={NavigationItemPosition.End} active={true}/>
                        </Route>
                        <Route path="*">
                            <NavigationItem label={"About me"} url={"/about-me"} position={NavigationItemPosition.Start} active={true}/>
                            <NavigationItem label={"Skills"} url={"/skills"} position={NavigationItemPosition.Middle} active={false}/>
                            <NavigationItem label={"Contact"} url={"/contact"} position={NavigationItemPosition.End} active={false}/>
                        </Route>
                    </Switch>

                </ul>
            </nav>
        );
    }
}

export default Navigation;