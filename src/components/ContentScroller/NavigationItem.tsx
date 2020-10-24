import React from "react";
import "../../style/Navigation.sass";
import { NavigationItemPosition } from "./NavigationScrollerTypes";
import { faCircle as fasCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle as farCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


type NavigationItemProps = {
    label: string
    url: string
    position: NavigationItemPosition,
    active: boolean
};

const NavigationItem = ({ url, label, position, active }: NavigationItemProps) => {
    return (
        <li className="nav-item">
            <Link to={url}>
                {label}<br/>
                <div className="item-connect">
                    {position !== NavigationItemPosition.Start ? <div className="connect-left"/> : <div style={{flex: 1}}/>}
                    <FontAwesomeIcon icon={active ? fasCircle : farCircle} size="1x"/>
                    {position !== NavigationItemPosition.End ? <div className="connect-right"/> : <div style={{flex: 1}}/>}
                </div>
            </Link>
        </li>
    )
}

export default NavigationItem;