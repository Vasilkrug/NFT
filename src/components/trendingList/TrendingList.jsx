import React from 'react';
import './TrendingList.scss';
import TrendingItem from "../trendingItem/TrendingItem";

const TrendingList = ({trendingsData}) => {
    return (
        <div>
            <ul className={'collection-cards-list'}>
                {trendingsData.map(card => {
                    return <TrendingItem
                        key={card.title}
                        title={card.title}
                        user={card.user}
                        userIcon={card.userIcon}
                        images={card.images}/>
                })}
            </ul>
        </div>
    );
};

export default TrendingList;