import React from 'react';
import './ColumnBox.scss';

const ColumnBox = ({classname = '', children, title}) => {
    return (
        <div className={classname}>
            <div className={'column-box-title'}>{title}</div>
            <div className={'column-box-body'}>
                {children}
            </div>
        </div>
    );
};

export default ColumnBox;