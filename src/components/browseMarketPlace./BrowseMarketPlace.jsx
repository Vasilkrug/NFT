import React, {useMemo, useState} from 'react';
import {SectionTitle, CustomInput, MarketPlaceCard} from '../index';
import {creators} from '../topCreatorsList/creatorsData';
import './BrowseMarketPlace.scss';

const BrowseMarketPlace = () => {
    const [users, setUsers] = useState(creators);
    const [title, setTitle] = useState('');
    const inputHandler = (e) => {
        setTitle(e.target.value)
    }

    const filteredProjects = useMemo(() => {
        return users.filter(item => item.projects.title.toLowerCase().includes(title.toLowerCase()))
    }, [title, users])

    return (
        <section className={'browse-marketplace'}>
            <SectionTitle title={'Browse Marketplace'}
                          text={'Browse through more than 50k NFTs on the NFT Marketplace.'}/>
            <div className={'marketplace-search'}>
                <CustomInput onChange={inputHandler} placeholder={'Search your favourite NFTs'}/>
            </div>
            <ul className={'marketplace-list'}>
                {filteredProjects.map(user => <MarketPlaceCard key={user.id} projects={user.projects} icon={user.icon}
                                                               userName={user.user}/>)}
            </ul>
        </section>
    );
};

export default BrowseMarketPlace;