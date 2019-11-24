import React from 'react';
import Board from './js/component/Board';
import './Game.css';

function Game() {
  return (
    <div className="game">
      <div className='game-board'>
        <Board />
      </div>
    </div>
  );
}

export default Game;
