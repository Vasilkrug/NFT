import React from 'react';
import {
    HeroSection, TrendingCollections, TopCreatorsList,
    MagicMashRoom, HowItWorks
} from '../../components/index';

const Home = () => {
    return (
        <>
            <HeroSection/>
            <TrendingCollections/>
            <TopCreatorsList/>
            <MagicMashRoom/>
            <HowItWorks/>
        </>
    );
};

export default Home;