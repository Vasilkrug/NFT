import React, {useState} from 'react';
import './Header.scss';
import Logo from '../logo/Logo';
import Nav from '../nav/Nav';
import {menu, user} from "../../assets/icons/icons";
import CustomButton from "../UI/customButton/CustomButton";
import {NavLink} from "react-router-dom";

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(false);

    const menuToggle = () => {
        setActiveMenu(!activeMenu)
    }

    return (
        <header className={'header'}>
            <Logo/>
            <Nav activeMenu={activeMenu} classname={'header-nav'}>
                <NavLink to={'/login'}><CustomButton  icon={user} text={'Sign Up'}/></NavLink>
            </Nav>
            <div className={'burger-menu'}>
                <button onClick={menuToggle}><img src={menu} alt='menu'/></button>
            </div>
        </header>
    );
};

export default Header;