import React from 'react';
import {CustomButton} from '../index';
import {coinBase, fox, walletConnect} from '../../assets/icons/icons';
import './ConnectWallet.scss';

const ConnectWallet = () => {
    return (
        <section className={'connect-wallet'}>
            <div className={'connect-wallet-buttons'}>
                <CustomButton icon={fox} text={'Metamask'}/>
                <CustomButton icon={walletConnect} text={'Wallet Connect'}/>
                <CustomButton icon={coinBase} text={'Coinbase'}/>
            </div>
        </section>
    );
};

export default ConnectWallet;