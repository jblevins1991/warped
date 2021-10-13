import React from 'react';
import Region from '../organisms/Region/Region';

// import rbyImage from '../../assets/images/rby.json';
import rby from '../../assets/json/rby.json';

const RbyMap = () => {
    return <div className='region-wrapper'>
        <Region
            mapImg='https://cdn2.bulbagarden.net/upload/8/86/Kanto_Town_Map_RBY.png'
            regionName='Red/Blue/Yellow'
            warpables={rby.warpables}
        />
    </div>;
};

export default RbyMap;