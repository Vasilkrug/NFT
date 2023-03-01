import React from 'react';
import './Footer.scss';
import Logo from "../logo/Logo";
import ColumnBox from "../columnBox/ColumnBox";
import {discord, instagram, twitter, youtube} from "../../assets/icons/icons";
import Nav from "../nav/Nav";
import CustomInput from "../UI/customInput/CustomInput";
import CustomButton from "../UI/customButton/CustomButton";

const Footer = () => {
    return (
        <footer className={'footer'}>
            <section className={'footer-section'}>
                <ColumnBox title={<Logo/>}>
                    <p>NFT marketplace UI created<br/> with Anima for Figma.</p>
                    <p>Join our community</p>
                    <div className={'social-networks'}>
                        <img src={discord} alt="discord"/>
                        <img src={youtube} alt="youtube"/>
                        <img src={twitter} alt="twitter"/>
                        <img src={instagram} alt="instagram"/>
                    </div>
                </ColumnBox>
                <ColumnBox title={'Explore'}>
                    <Nav classname={'footer-nav'}/>
                </ColumnBox>
                <ColumnBox title={'Join our weekly digest'}>
                    <p>Get exclusive promotions & updates<br/> straight to your inbox.</p>
                    <div className={'subscribe'}>
                        <CustomInput style={{width:'100%'}} placeholder={'Enter your email here'}/>
                        <CustomButton  text={'Subscribe'}/>
                    </div>
                </ColumnBox>
            </section>
        </footer>
    );
};

export default Footer;