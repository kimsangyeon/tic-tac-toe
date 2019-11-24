import React from 'react';
import Square from './Square';

function Board() {
  const renderSquare = () => {
    return <Square />
  }

  const status = 'Next Player: X';

  return (
    <div>
      <div className='status'>{status}</div>
      <div className='borad-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='borad-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='borad-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;