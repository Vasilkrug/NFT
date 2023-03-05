import React from 'react';
import {SectionTitle, TrendingList} from '../index';
import {trendingsData} from './trendingsData';
import './TrendingCollections.scss';

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