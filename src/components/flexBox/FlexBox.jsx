import React from 'react';
import './FlexBox.scss';

const FlexBox = ({img, content, title, text}) => {
    return (
        <div className={'flex-box'}>
            <div className={'img-box'}>
                <img src={img} alt="image"/>
            </div>
            <div className={'content-box'}>
                <div className={'content-box-title'}>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
                <div className={'content-box-body'}>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default FlexBox;