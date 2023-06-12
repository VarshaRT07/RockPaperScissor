import { useState } from 'react';
import './App.css';

function App() {
  const [player,setPlayer]=useState(null);
  const [computer,setComputer]=useState(null);
  const [playerscore,setPlayerscore]=useState(0);
  const [computerscore,setComputerscore]=useState(0);
  const [winner, setWinner] = useState('');
  const [showresult,setShowresult] = useState(false)


  let choices=['rock','paper','scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  console.log(randomIndex);
  const computerChoice = choices[randomIndex];

console.log("Computer's choice:", computerChoice);
  setComputer(computerChoice);
  if((player==="rock"&& computer==="scissors") || (player==="paper"&& computer==="rock") || (player==="scissors"&& computer==="paper") ){
     setPlayerscore(playerscore+1);
  }
  if((computer==="rock"&& player==="scissors") || (computer==="paper"&& player==="rock") || (computer==="scissors"&& player==="paper") ){
    setComputerscore(computerscore+1);
 }
 if((computer===player)){
  return;
 }


  // console.log(compChoice);
  // console.log(player);

  const addRock=()=>{
       setPlayer('rock');
  }
  const addPaper=()=>{
    setPlayer('paper');
}

const addScissors=()=>{
  setPlayer('scissors');
}

const checkWinner=()=>{
  setShowresult(true);
   if(playerscore>computerscore){
    setWinner('Player wins!');
   }
   else if(computerscore>playerscore){
    setWinner('Computer wins!');
   }
   else{
    setWinner("It's a tie!"); 
   }
}



  return (
    <div className="App">
       <div>
         <h1>LETS PLAY....</h1>
         <h2>Choose your choices</h2>
         <div className="choices">
            <div >
          <button onClick={addRock} >ROCK</button>
         </div>
         <div >
          <button onClick={addPaper}>PAPER</button>
         </div>
         <div >
          <button onClick={addScissors}>SCISSORS</button>
         </div>
         </div>
         <h3>Your score is {playerscore}</h3>
         <h3>Computer score is {computerscore}</h3>
         <button onClick={checkWinner}>END GAME</button>
        {showresult && <h3>{winner}</h3>}

       
       </div>
    </div>
  );
}

export default App;
