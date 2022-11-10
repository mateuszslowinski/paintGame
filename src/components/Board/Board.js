import {createBoard} from "../../utils/generateBoard";
import {MOVES} from "../../constatns";
import './Board.css';

export const Board = ({
                          moves,
                          cellsArray,
                          isWonGame,
                          setCellsArray,
                          setMoves,
                          setIsWonGame,
                          setNumberOfWonGames,
                          numberOfWonGames
                      }) => {

    const renderCells = () => {
        return cellsArray.map((cell, index) => (
            <div
                key={index}
                className='cell'
                style={{backgroundColor: cell.value}}
            />
        ))
    };

    const handleNextGame = () => {
        setCellsArray(createBoard());
        setNumberOfWonGames(prevState => prevState + 1)
        setMoves(MOVES - numberOfWonGames);
        setIsWonGame(false);
    };

    return (
        <div className='board'>
            {renderCells()}
            {moves === 0 ? <div className='lost'>Przegrana</div> : null}
            {isWonGame
                ? <div className='won'>
                    <p>Gratulacje wygrałeś</p>
                    <button
                        className='btn'
                        onClick={handleNextGame}
                    >
                        Następna gra
                    </button>
                </div>
                : null
            }
        </div>
    )
}