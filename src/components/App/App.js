import './App.css';
import {COLORS} from "../../constatns";

export const App = () => {
    return (
        <div className="App">
            <div className='game__container'>
                <h1>Witaj w Paint Game</h1>
                <div className='board'>Board</div>
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