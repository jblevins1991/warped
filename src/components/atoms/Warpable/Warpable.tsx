import React, { FC, MouseEvent, useState } from 'react';
import clsx from 'clsx';

import { Position, Size } from '../../../types/warp';

import './warpable.scss';

interface WarpableProps {
    name: string;
    position: Position;
    size: Size;
};

const Warpable: FC<WarpableProps> = ({
    position,
    name,
    size
}) => {
    const [visited, setVisited] = useState(false);

    const onClick = (event: MouseEvent<HTMLButtonElement>) => {
        setVisited(true);
    };

    const onMouseEnter = (event: MouseEvent<HTMLButtonElement>) => {
        // call redux logic to highlight all connected nodes
    };

    const onMouseLeave= (event: MouseEvent<HTMLButtonElement>) => {
        // call redux logic to clear all highlighted nodes
    };

    return <button
        aria-label={name}
        className={clsx(
            'warpable',
            { visited }
        )}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{
            position: 'absolute',
            top: position.x,
            left: position.y,
            width: size.width,
            height: size.height
        }}
    >
    </button>;
};

export default Warpable;