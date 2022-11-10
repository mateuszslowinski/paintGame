import {RestartBtn} from "./RestartBtn/RestartBtn";
import {COLORS, MOVES, WIDTH} from "../../constatns";
import './Buttons.css';

export const Buttons = ({cellsArray, moves, setIsWonGame, setCellsArray, setMoves, setNumberOfWonGames}) => {
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

        if (activeCellIndexArray.length === cellsArray.length) {
            setIsWonGame(true);
        }

        setCellsArray(foundedColorsArray)
        setMoves(moves - 1)
    };

    return (
        <div className='buttons__container'>
            <h3>Wybierz kolor:</h3>
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
            <RestartBtn
                setIsWonGame={setIsWonGame}
                setCellsArray={setCellsArray}
                setNumberOfWonGames={setNumberOfWonGames}
                setMoves={setMoves}/>
        </div>
    )
}