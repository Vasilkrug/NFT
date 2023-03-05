import React from 'react';
import {creators} from '../topCreatorsList/creatorsData';
import './Table.scss';

const Table = () => {
    return (
        <table className={'table'}>
            <thead>
            <tr>
                <th>*</th>
                <th>Artist</th>
                <th>Change</th>
                <th>NFTs Sold</th>
                <th>Volume</th>
            </tr>
            </thead>
            <tbody>
            {creators.map((user, index) => {
                return <tr>
                    <td className={'user-count'}><span>{index + 1}</span></td>
                    <td className={'user-info'}>
                        <img src={user.icon} alt=""/>
                        <span>{user.user}</span>
                    </td>
                    <td className={'nft-change'}>+1.41%</td>
                    <td>602</td>
                    <td>12.4 ETH</td>
                </tr>
            })}
            </tbody>
        </table>
    );
};

export default Table;