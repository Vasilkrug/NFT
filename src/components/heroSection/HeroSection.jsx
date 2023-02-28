import React from 'react';
import './HeroSection.scss';
import CustomButton from "../UI/customButton/CustomButton";
import {avatar, rocket} from "../../assets/icons/icons";
import {hero} from "../../assets/images/images";
import {heroData} from "./heroData";

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
                    <CustomButton style={{padding:'20px 50px'}} icon={rocket} text={'Get Started'}/>
                </div>
                <div className={'hero-stats'}>
                    {heroData.map(item => {
                        return <div key={item.text} className={'hero-stat-item'}>
                            <p>{item.title}</p>
                            <span>{item.text}</span>
                        </div>
                    })}
                </div>
            </div>
            <div className={'hero-image'}>
                <img src={hero} alt=""/>
                <div className={'hero-image-title'}>
                    <p>Space Walking</p>
                    <img src={avatar} alt=""/><span>Animakid</span>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;