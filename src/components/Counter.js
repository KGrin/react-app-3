import React from 'react';

const Counter = ({value, increment, decrement, reset, setValue}) => {
  let input;

  return (
    <div>
      Value: {value}
      <br />
      <button onClick={() => {
        increment();
      }}>+</button>
      {' '}
      <button onClick={() => {
        decrement();
      }}>-</button>
      {' '}
      <button onClick={() => {
        reset();
      }}>RESET</button>
      {' '}
      <input ref={elem => {
        input = elem
      }}/>
      <button onClick={() => {
        setValue(input.value);
        input.value = '';
      }}>SET VALUE</button>
    </div>
  );
};

export default Counter;