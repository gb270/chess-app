import React, { useState } from 'react';
import './App.css';
import Chessboard from 'chessboardjsx';
import WithMoveValidation from './moveValidation.js';



function App() {
  return (
    <div className='flex-center'>
      <h1>Chess</h1>
      <WithMoveValidation />
    </div>
  );
}

export default App;
