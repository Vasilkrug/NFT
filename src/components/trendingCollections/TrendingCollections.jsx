import React from 'react';
import './TrendingCollections.scss';
import SectionTitle from "../sectionTitle/SectionTitle";
import {trendingsData} from "./trendingsData";
import TrendingList from "../trendingList/TrendingList";

const TrendingCollections = () => {

    return (
        <section className={'trending-collections'}>
            <SectionTitle
                title={'Trending Collection'}
                text={'Checkout our weekly updated trending collection.'}/>
            <TrendingList trendingsData={trendingsData}/>
        </section>
    );
};

export default TrendingCollections;