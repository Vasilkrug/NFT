import React from 'react';
import {SectionTitle, HowItWorkItem} from '../index';
import {howItWorksData} from "./howItWorksData";
import './HowItWorks.scss';

const HowItWorks = () => {
    return (
        <section className={'how-it-works'}>
            <SectionTitle title={'How it works'} text={'Find out how to get started'}/>
            <ul className={'how-it-works-list'}>
                {howItWorksData.map(item => {
                    return <HowItWorkItem
                        key={item.title}
                        title={item.title}
                        text={item.text}
                        image={item.image}/>
                })}
            </ul>
        </section>
    );
};

export default HowItWorks;