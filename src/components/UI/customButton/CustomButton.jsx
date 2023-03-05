import React from 'react';
import './CustomButton.scss';

const CustomButton = ({icon, text, style}) => {
    return (
        <button style={style} className={'custom-button'}>
            {icon ? <img src={icon} alt='icon'/> : null}
            <span>{text}</span>
        </button>
    );
};

export default CustomButton;