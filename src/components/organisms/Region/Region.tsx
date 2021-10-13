import React, { FC } from "react";
import { Warpable } from "../../../types/warp";
import {
    LocationList,
    Map
} from "../../molecules/";

import './region.scss';

interface RegionProps {
    mapImg?: string;
    regionName?: string;
    warpables: Warpable[];
};

const Region: FC<RegionProps> = ({
    mapImg,
    regionName,
    warpables
}) => {
    return <div className='region-wrapper'>
        <h1 className='region-heading'>{ regionName }</h1>

        <div className='region-location-wrapper'>
            <Map
                mapImg={mapImg}
                regionName={regionName}
                warpables={warpables}
            />
            
            <LocationList warpables={warpables} />

            {/* @todo: add Ad component here */}
        </div>
    </div>;
};

export default Region;