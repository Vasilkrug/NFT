import React from 'react';
import './TopRankings.scss';
import SectionTitle from "../sectionTitle/SectionTitle";
import Table from "../Table/Table";

const TopRankings = () => {
    return (
        <section className={'top-rankings'}>
            <SectionTitle title={'Top Creators'} text={'Check out top ranking NFT artists on the NFT Marketplace.'}/>
            <Table/>
        </section>
    );
};

export default TopRankings;