import React, {useState} from 'react';
import './Header.scss';
import Logo from '../logo/Logo';
import Nav from '../nav/Nav';
import {menu} from "../../assets/icons/icons";

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(false);

    const menuToggle = () => {
        setActiveMenu(!activeMenu)
    }

    return (
        <header className={'header'}>
            <Logo/>
            <Nav activeMenu={activeMenu}/>
            <div className={'burger-menu'}>
                <button onClick={menuToggle}><img src={menu} alt='menu'/></button>
            </div>
        </header>
    );
};

export default Header;