import {useState} from "react";
import {createBoard} from "../../utils/generateBoard";
import {COLORS} from "../../constatns";

import './App.css';

export const App = () => {
    const [cellsArray, setCellsArray] = useState(createBoard());

    const renderCells = () => {
        return cellsArray.map((cell, index) => (
            <div
                key={index}
                className='cell'
                style={{backgroundColor: cell.value}}
            />
        ))
    };
    return (
        <div className="App">
            <div className='game__container'>
                <h1>Witaj w Paint Game</h1>
                <div className='board'>
                    {renderCells()}
                </div>
                <div className='buttons__container'>
                    <h2>Wybierz kolor:</h2>
                    <div>
                        {COLORS.map((color, index) => (
                            <button
                                key={index}
                                style={{backgroundColor: color}}
                                className='button'
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

}