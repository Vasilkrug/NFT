import React from 'react';
import './HeroSection.scss';
import CustomButton from "../UI/customButton/CustomButton";
import {rocket} from "../../assets/icons/icons";
import {hero} from "../../assets/images/images";

const HeroSection = () => {
    return (
        <section className={'hero-section'}>
            <div className={'hero-description'}>
                <h1>Discover digital art & Collect NFTs</h1>
                <div className={'hero-text'}>
                    <p>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT
                        artists.</p>
                </div>
                <div className={'hero-btn'}>
                    <CustomButton icon={rocket} text={'Get Started'}/>
                </div>
                <div className={'hero-stats'}>
                    240k+
                    100k+
                    240k+
                    Total Sale
                    Auctions
                    Artists
                </div>
            </div>
            <div className={'hero-image'}>
                <img src={hero} alt=""/>
            </div>
        </section>
    );
};

export default HeroSection;