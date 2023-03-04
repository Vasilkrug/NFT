import React from 'react';
import HeroSection from "../../components/heroSection/HeroSection";
import TrendingCollections from "../../components/trendingCollections/TrendingCollections";
import TopCreatorsList from "../../components/topCreatorsList/topCreatorsList";
import MagicMashRoom from "../../components/magicMashRoom/MagicMashRoom";
import HowItWorks from "../../components/howitWorks/HowItWorks";

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