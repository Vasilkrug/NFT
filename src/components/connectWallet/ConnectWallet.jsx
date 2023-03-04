import React from 'react';
import './ConnectWallet.scss';
import CustomButton from "../UI/customButton/CustomButton";
import {coinBase, fox, walletConnect} from "../../assets/icons/icons";

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