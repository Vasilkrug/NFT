import React from 'react';
import './SectionTitle.scss';

const SectionTitle = ({title,text}) => {
    return (
        <div className={'section-title'}>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
};

export default SectionTitle;