import React from 'react';
import {SectionTitle, CustomButton, CreatorItem} from '../index';
import {rocket} from '../../assets/icons/icons';
import {creators} from './creatorsData';
import './topCreatorsList.scss';

const TopCreatorsList = () => {
    return (
        <section className={'top-creators'}>
            <div className={'top-creators-title'}>
                <SectionTitle title={'Top creators'} text={'Checkout Top Rated Creators on the NFT Marketplace'}/>
                <CustomButton
                    text={'View Rankings'}
                    icon={rocket}
                    style={{backgroundColor: '#2B2B2B', border: '2px solid #A259FF', padding: '20px 50px'}}/>
            </div>
            <ul className={'creators-list'}>
                {creators.map((user, index) => {
                    return <CreatorItem
                        key={user.id}
                        user={user.user}
                        icon={user.icon}
                        sales={user.sales}
                        id={user.id}
                        rank={index + 1}/>
                })}
            </ul>
        </section>
    );
};

export default TopCreatorsList;