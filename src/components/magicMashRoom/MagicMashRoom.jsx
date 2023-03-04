import React from 'react';
import './MagicMashRoom.scss';
import {shroomie} from "../../assets/images/creators/creators";
import CustomButton from "../UI/customButton/CustomButton";
import {watch} from "../../assets/icons/icons";
import Timer from "../timer/Timer";

const MagicMashRoom = () => {
    return (
        <section className={'magic-mashroom'}>
            <div className={'auction-info'}>
                <div className={'auction-user'}>
                    <img src={shroomie} alt=""/>
                    <p>Shroomie</p>
                </div>
                <div className={'auction-title'}>
                    <h2>Magic Mashrooms</h2>
                </div>
                <div className={'auction-button'}>
                    <CustomButton
                        icon={watch}
                        text={'See NFT'}
                        style={{backgroundColor: '#FFF', color: '#2B2B2B', padding: '20px 50px'}}/>
                </div>
            </div>
                <Timer/>
        </section>
    );
};

export default MagicMashRoom;