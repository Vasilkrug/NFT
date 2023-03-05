import React from 'react';
import {FlexBox, Form} from '../../components/index';
import {loginBgImage} from "../../assets/images/images";

const Login = () => {
    return (
        <>
            <FlexBox
                img={loginBgImage}
                title={'Create account'}
                text={'Welcome! Enter your details and start creating, collecting and selling NFTs.'}
                content={<Form/>}/>
        </>
    );
};

export default Login;