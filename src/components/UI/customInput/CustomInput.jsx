import React from 'react';
import './CustomInput.scss';

const CustomInput = ({placeholder,style}) => {
    return (
        <div className={'custom-input'}>
            <input style={style} type="text" placeholder={placeholder}/>
        </div>
    );
};

export default CustomInput;