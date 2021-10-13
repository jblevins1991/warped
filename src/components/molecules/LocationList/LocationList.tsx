import React, { FC } from 'react';
import { Warpable } from '../../../types/warp';

import './locationlist.scss';

interface LocationListProps {
    warpables: Warpable[];
}

const LocationList: FC<LocationListProps> = ({
    warpables
}) => {
    return <div className='location-list-wrapper'>
        <ul className='location-list'>
            {
                warpables.map((warpable: Warpable) => {
                    return <li className='location-list-item'>
                        { warpable.name }
                    </li>
                })
            }
        </ul>
    </div>
};

export default LocationList;