import React from 'react';
import './HowItWorkItem.scss';

const HowItWorkItem = ({title, image, text}) => {
    return (
        <li className={'how-it-work-card'}>
            <img src={image} alt='info-image'/>
            <div className={'how-it-work-info'}>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </li>
    );
};

export default HowItWorkItem;