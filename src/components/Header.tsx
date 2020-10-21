import React from "react";
import '../style/Header.sass'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

type HeaderState = {
    loaded: boolean
    scrollButtonVisible: boolean
};

type HeaderProps = {};

class Header extends React.Component<HeaderProps, HeaderState> {

    state: HeaderState = {
        loaded: false,
        scrollButtonVisible: true
    };

    componentDidMount() {
        this.setState({ loaded: true });
        window.addEventListener('scroll', this.handleScroll, { passive: true });
    }

    handleScroll = () => {
        const scrollPosition: number = window.pageYOffset
        const visible: boolean = Header.isScrollButtonVisible(scrollPosition);
        this.setScrollButtonVisible(visible)
    }

    setScrollButtonVisible = (isVisible: boolean) => {
        this.setState({ scrollButtonVisible: isVisible })
    }

    private static isScrollButtonVisible(scrollY: number) {
        return scrollY / window.innerHeight * 100 < 10;
    }

    render() {
        const scrollButtonClasses =
            `btn btn-invisible opacity-transition${this.state.scrollButtonVisible ? "" : " disabled"}`;

        return (
            <header>
                <div className="name-container">
                    <h1>Adrian A<span className={"special-letter"} data-char="L">Ł</span>aszewski</h1>
                    <h3>Software Engineer</h3>
                </div>
                <a
                    href={"#main"}
                    className={scrollButtonClasses}
                    style={{
                        opacity: this.state.scrollButtonVisible ? 1 : 0
                    }}
                >
                    <div className="header-scroll">
                        <FontAwesomeIcon icon={faChevronDown} size="3x"/>
                    </div>
                </a>
            </header>
        );
    }
}

export default Header;