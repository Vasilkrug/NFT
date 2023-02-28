import React from 'react';
import './CustomButton.scss';

const CustomButton = ({icon, text,style}) => {
    return (
        <button style={style} className={'custom-button'}>
            <img src={icon} alt='icon'/>
            <span>{text}</span>
        </button>
    );
};

export default CustomButton;