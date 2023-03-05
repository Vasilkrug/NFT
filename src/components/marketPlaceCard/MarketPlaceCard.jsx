import React from 'react';
import './MarketPlaceCard.scss';

const MarketPlaceCard = ({projects, icon, userName}) => {
    return (
        <li className={'nft-item'}>
            <div className={'nft-image'}>
                <img src={projects.image} alt=""/>
            </div>
            <div className={'nft-info'}>
                <div className={'nft-user-title'}>
                    <p>{projects.title}</p>
                </div>
                <div className={'nft-user'}>
                    <img src={icon} alt=""/> <span>{userName}</span>
                </div>
                <div className={'nft-price-info'}>
                    <div className={'nft-price'}>
                        <span>Price</span>
                        <p>{projects.price}</p>
                    </div>
                    <div className={'nft-bid'}>
                        <span>Highest Bid</span>
                        <p>{projects.bid}</p>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default MarketPlaceCard;