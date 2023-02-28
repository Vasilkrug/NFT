import React from 'react';
import './TrendingCollections.scss';
import SectionTitle from "../sectionTitle/SectionTitle";
import {trendingsData} from "./trendingsData";

const TrendingCollections = () => {

    return (
        <section className={'trending-collections'}>
            <SectionTitle
                title={'Trending Collection'}
                text={'Checkout our weekly updated trending collection.'}/>
            <ul className={'collection-cards-list'}>
                {trendingsData.map(card => {
                    return <li className={'collection-card'}>
                        <div className={'collection-card-images'}>
                            {card.images.map(image => {
                                return <div className={'card-image'}>
                                    <img src={image} alt=""/>
                                </div>
                            })}
                        </div>
                        <div className="collection-card-user">
                            <p>{card.title}</p>
                            <img src={card.userIcon} alt="user-icon"/>
                            <span>{card.user}</span>
                        </div>
                    </li>
                })}
            </ul>
        </section>
    );
};

export default TrendingCollections;