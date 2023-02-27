import React from 'react';
import './Nav.scss';
import {user} from "../../assets/icons/icons";
import CustomButton from "../UI/customButton/CustomButton";

const Nav = ({activeMenu}) => {

    return (
        <nav className={`nav ${activeMenu ? 'active' : ''}`}>
            <a href="">Marketplace</a>
            <a href="">Rankings</a>
            <a href="">Connect a wallet</a>
            <CustomButton  icon={user} text={'Sign Up'}/>
        </nav>
    );
};

export default Nav;