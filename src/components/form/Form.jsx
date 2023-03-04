import React from 'react';
import './Form.scss';
import CustomInput from "../UI/customInput/CustomInput";
import CustomButton from "../UI/customButton/CustomButton";

const Form = () => {
    return (
        <form className={'form'}>
            <label id={'name'}><CustomInput placeholder={'Username'}/></label>
            <label id={'email'}><CustomInput placeholder={'Email Address'}/></label>
            <label id={'password'}><CustomInput placeholder={'Password'}/></label>
            <label id={'confirm-password'}><CustomInput placeholder={'Confirm Password'}/></label>
            <CustomButton text={'Create Account'} style={{display: 'flex', justifyContent: 'center'}}/>
        </form>
    );
};

export default Form;