import React from 'react';
import {FlexBox, ConnectWallet} from '../../components/index';
import {walletBgImage} from '../../assets/images/images';

const Wallet = () => {
    return (
        <>
            <FlexBox
                title={'Connect wallet'}
                text={'Choose a wallet you want to connect. There are several wallet providers.'}
                img={walletBgImage}
                content={<ConnectWallet/>}/>
        </>
    );
};

export default Wallet;