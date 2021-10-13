import React, { FC } from 'react';
import { Warpable } from '../../../types/warp';
import { default as WarpableComponent } from '../../atoms/Warpable/Warpable';

import './map.scss';

interface MapProps {
    mapImg?: string;
    regionName?: string;
    warpables?: Warpable[];
};

const Map: FC<MapProps> = ({
    mapImg,
    regionName,
    warpables
}) => {
    return <div className='map-wrapper'>
        <img
            className='kanto-map'
            draggable={false}
            src={mapImg}
            alt={`An image of the ${regionName} region`}
        />

        {
            warpables?.map((warp: Warpable) => {
                return <WarpableComponent
                    name={warp.name}
                    position={warp.position}
                    size={warp.size}
                />;
            })
        }
    </div>;
};

export default Map;