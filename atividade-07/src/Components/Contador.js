import React, { useState } from 'react';
import './contador.css';

function ContadorPessoas() {
  const [total, setTotal] = useState(0);
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const HomensAdd = () => {
    setTotal(total + 1);
    setHomens(homens + 1);
  };

  const HomensRemove = () => {
    setTotal(total - 1);
    setHomens(homens - 1);
  };

  const MulheresAdd = () => {
    setTotal(total + 1);
    setMulheres(mulheres + 1);
  };

  const MulheresRemove = () => {
    setTotal(total - 1);
    setMulheres(mulheres - 1);
  };

  const Refresh = () => {
    setTotal(0);
    setHomens(0);
    setMulheres(0);
  };

  return (
    <div className='container'>
      <h1>Total: {total}</h1>
      <div className='buttons-container'>
        <h2>Homens: {homens}</h2>
        <button onClick={HomensAdd}>+</button>
        <button onClick={HomensRemove}>-</button>
      </div>
      <div className='buttons-container'>
        <h2>Mulheres: {mulheres}</h2>
        <button onClick={MulheresAdd}>+</button>
        <button onClick={MulheresRemove}>-</button>
      </div>
      <button className='refresh-button' onClick={Refresh}>Refresh</button>
    </div>
  );
}

export default ContadorPessoas;
