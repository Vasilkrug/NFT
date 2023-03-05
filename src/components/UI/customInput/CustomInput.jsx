import React from 'react';
import './CustomInput.scss';

const CustomInput = ({placeholder, style, onChange}) => {
    return (
        <div className={'custom-input'}>
            <input onChange={event => onChange(event)} style={style} type="text" placeholder={placeholder}/>
        </div>
    );
};

export default CustomInput;