import {useState} from "react";
import {Board} from "../Board/Board";
import {Buttons} from "../Buttons/Buttons";
import {createBoard} from "../../utils/generateBoard";
import {MOVES} from "../../constatns";
import './App.css';

export const App = () => {
    const [cellsArray, setCellsArray] = useState(createBoard());
    const [moves, setMoves] = useState(MOVES);
    const [isWonGame, setIsWonGame] = useState(false);
    const [numberOfWonGames, setNumberOfWonGames] = useState(1);

    return (
        <div className="App">
            <div className='game__container'>
                <h1>Witaj w Paint Game</h1>
                <h2>Masz {moves} ruchów</h2>
                <div className='board__and__button__container'>
                    <Board
                        cellsArray={cellsArray}
                        isWonGame={isWonGame}
                        moves={moves}
                        setCellsArray={setCellsArray}
                        numberOfWonGames={numberOfWonGames}
                        setIsWonGame={setIsWonGame}
                        setMoves={setMoves}
                        setNumberOfWonGames={setNumberOfWonGames}
                    />
                    <Buttons
                        setNumberOfWonGames={setNumberOfWonGames}
                        setMoves={setMoves}
                        moves={moves}
                        setCellsArray={setCellsArray}
                        cellsArray={cellsArray}
                        setIsWonGame={setIsWonGame}
                    />
                </div>
            </div>
        </div>
    );
}