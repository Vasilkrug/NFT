import React, {useState} from 'react';
import {Logo, Nav, CustomButton} from '../index';
import {menu, user} from '../../assets/icons/icons';
import {NavLink} from 'react-router-dom';
import './Header.scss';

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(false);

    const menuToggle = () => {
        setActiveMenu(!activeMenu)
    }

    return (
        <header className={'header'}>
            <Logo/>
            <Nav closeMenu={menuToggle} activeMenu={activeMenu} classname={'header-nav'}>
                <NavLink to={'/login'}><CustomButton icon={user} text={'Sign Up'}/></NavLink>
            </Nav>
            <div className={'burger-menu'}>
                <button onClick={menuToggle}><img src={menu} alt='menu'/></button>
            </div>
        </header>
    );
};

export default Header;