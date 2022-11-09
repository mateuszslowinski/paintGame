import {useState} from "react";
import {createBoard} from "../../utils/generateBoard";
import {COLORS, MOVES, WIDTH} from "../../constatns";

import './App.css';

export const App = () => {
    const [cellsArray, setCellsArray] = useState(createBoard());
    const [moves, setMoves] = useState(MOVES);

    const renderCells = () => {
        return cellsArray.map((cell, index) => (
            <div
                key={index}
                className='cell'
                style={{backgroundColor: cell.value}}
            />
        ))
    };


    const handleColorClick = (color) => {
        cellsArray[0].active = true;
        cellsArray[0].value = color;


        if (moves !== MOVES) {
            for (let i = 0; i < WIDTH * WIDTH; i++) {
                if (cellsArray[i].active === true) {
                    cellsArray[i].value = color;
                }
            }
        }
        const activeCellIndexArray = [];
        activeCellIndexArray.push(cellsArray[0].index);

        const foundedColorsArray = cellsArray.map(square => {
            if ((activeCellIndexArray.includes(square.index - 1)
                    && square.value === color)
                ||
                (activeCellIndexArray.includes(square.index - WIDTH)
                    && square.value === color)
                ||
                (activeCellIndexArray.includes(square.index + 1)
                    && square.value === color)
            ) {
                square.active = true
                activeCellIndexArray.push(square.index)
            }
            return square
        })
        setCellsArray(foundedColorsArray)
        setMoves(moves - 1)
    };

    const restartGame = () => {
        setCellsArray(createBoard());
        setMoves(MOVES);
    };

    return (
        <div className="App">
            <div className='game__container'>
                <h1>Witaj w Paint Game</h1>
                <h2>Masz {moves} ruchów</h2>
                <div className='board__and__button__container'>
                    <div className='board'>
                        {renderCells()}
                        {moves === 0 ? <div className='lost'>Przegrana</div> : null}
                    </div>
                    <div className='buttons__container'>
                        <h3 >Wybierz kolor:</h3>
                        <div>
                            {COLORS.map((color, index) => (
                                <button
                                    key={index}
                                    style={{backgroundColor: color}}
                                    className='button'
                                    disabled={moves === 0}
                                    onClick={() => handleColorClick(color)}
                                />
                            ))}
                        </div>
                        <button
                            className='reset__btn'
                            onClick={() => restartGame()}
                        >
                            Restart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

}