import React from "react";
import Navigation from "./Navigation";
import Content from "./Content";
import "../../style/ContentScroller.sass";
import { BrowserRouter } from "react-router-dom";


class ContentScroller extends React.Component<{}, {}> {

    render() {
        return (
            <div className="content-scroller">
                <BrowserRouter>
                    <Navigation/>
                    <Content/>
                </BrowserRouter>
            </div>
        );
    }
}

export default ContentScroller;