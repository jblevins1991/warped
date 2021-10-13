/**
 * Defines the size of the warpable in px.
 */
export interface Size {
    width: string;
    height: string;
};

/**
 * Defines the position on the map relative to 0, 0.
 */
export interface Position {
    x: number;
    y: number;
};

/**
 * Defines an area that has a warp zone in it.
 */
export interface Warpable {
    name: string;
    position: Position;
    size: Size;
};

/**
 * Defines an area that has one or more warpables.
 */
export interface WarpZone {
    from: Warpable;
    to: Warpable;
};