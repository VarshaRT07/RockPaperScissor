import { useState } from 'react';
import './App.css';

function App() {
  const [player, setPlayer] = useState(null);
  const [computer, setComputer] = useState(null);
  const [playerscore, setPlayerscore] = useState(0);
  const [computerscore, setComputerscore] = useState(0);
  const [winner, setWinner] = useState('');

  let choices = ['rock', 'paper', 'scissors'];

  const addRock = () => {
    setPlayer('rock');
    playGame('rock');
  };

  const addPaper = () => {
    setPlayer('paper');
    playGame('paper');
  };

  const addScissors = () => {
    setPlayer('scissors');
    playGame('scissors');
  };

  const playGame = (player) => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computer = choices[randomIndex];

    setComputer(computer);

    if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      setPlayerscore(playerscore + 1);
    }

    if (
      (computer === 'rock' && player === 'scissors') ||
      (computer === 'paper' && player === 'rock') ||
      (computer === 'scissors' && player === 'paper')
    ) {
      setComputerscore(computerscore + 1);
    }

    if (playerscore > computerscore) {
      setWinner('Player is winning!');
    } else if (computerscore > playerscore) {
      setWinner('Computer is winning!');
    } else {
      setWinner("It's a tie!");
    }
  };

  return (
    <div className="App">
      <div>
        <h1>LETS PLAY....</h1>
        <h2>Choose your choices</h2>
        <div className="choices">
          <div>
            <button onClick={addRock}>ROCK</button>
          </div>
          <div>
            <button onClick={addPaper}>PAPER</button>
          </div>
          <div>
            <button onClick={addScissors}>SCISSORS</button>
          </div>
        </div>
        <h3>Your score is {playerscore}</h3>
        <h3>Computer score is {computerscore}</h3>
        <h3>{winner}</h3>
      </div>
    </div>
  );
}

export default App;
