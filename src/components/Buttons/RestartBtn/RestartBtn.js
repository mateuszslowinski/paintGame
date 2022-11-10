import {createBoard} from "../../../utils/generateBoard";
import {MOVES} from "../../../constatns";

export const RestartBtn = ({setCellsArray, setMoves, setNumberOfWonGames, setIsWonGame}) => {
    const restartGame = () => {
        setCellsArray(createBoard());
        setMoves(MOVES);
        setNumberOfWonGames(1)
        setIsWonGame(false);
    };
    return <button className='btn' onClick={restartGame}>Restart</button>
}