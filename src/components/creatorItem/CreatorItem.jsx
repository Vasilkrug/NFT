import React from 'react';
import './CreatorItem.scss';

const CreatorItem = ({id, rank, icon, user, sales}) => {
    return (
        <li key={id} className={'creator-card'}>
            <div className={'creator-rank'}>
                <span>{rank}</span>
            </div>
            <div className={'creator-image'}>
                <img src={icon} alt="user-avatar"/>
            </div>
            <div className={'creator-info'}>
                <h4>{user}</h4>
                <p><span>Total Sales:</span> {sales}</p>
            </div>
        </li>
    );
};

export default CreatorItem;