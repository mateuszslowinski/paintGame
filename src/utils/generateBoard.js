import {COLORS, WIDTH} from "../constatns";

export const createBoard = () => {
    const randomCellsArray = [];

    for (let i = 0; i < WIDTH * WIDTH; i++) {
        randomCellsArray.push({
            value: COLORS[Math.floor(Math.random() * COLORS.length)],
            index: i,
            active: false
        })
    }
    return randomCellsArray
}