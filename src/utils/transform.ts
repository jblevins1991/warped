import { Position } from "../types/warp";

/**
 * Transforms map position to canvas position.
 */
export const mapToCanvasPosition = (
    position: Position,
    offset: number
) => {
    return {
        x: position.x * offset,
        y: position.y * offset
    };
};