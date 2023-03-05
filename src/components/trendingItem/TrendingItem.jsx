import React from 'react';
import './TrendingItem.scss';

const TrendingItem = ({title, images, userIcon, user}) => {
    return (
        <li className={'collection-card'}>
            <div className={'collection-card-images'}>
                {images.map(image => {
                    return <div key={image} className={'card-image'}>
                        <img src={image} alt=""/>
                    </div>
                })}
            </div>
            <div className={'collection-card-user'}>
                <p>{title}</p>
                <img src={userIcon} alt="user-icon"/>
                <span>{user}</span>
            </div>
        </li>
    );
};

export default TrendingItem;