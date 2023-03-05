import React from 'react';
import {SectionTitle, Table} from '../index';
import './TopRankings.scss';

const TopRankings = () => {
    return (
        <section className={'top-rankings'}>
            <SectionTitle title={'Top Creators'} text={'Check out top ranking NFT artists on the NFT Marketplace.'}/>
            <Table/>
        </section>
    );
};

export default TopRankings;