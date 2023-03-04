import React from 'react';
import './Nav.scss';
import {NavLink} from "react-router-dom";

const Nav = ({activeMenu,children,classname}) => {

    return (
        <nav className={`nav ${activeMenu ? 'active' : ''} ${classname ? classname : ''}`}>
            <NavLink to="/marketplace">Marketplace</NavLink>
            <NavLink to="/rankings">Rankings</NavLink>
            <NavLink to="/wallet">Connect a wallet</NavLink>
            {children}
        </nav>
    );
};

export default Nav;