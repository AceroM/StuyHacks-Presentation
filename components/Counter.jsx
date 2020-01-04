import React, { useState } from 'react';

export default () => {
  const [counter, setCounter] = useState(0);
  const btnStyles = `my-2 mx-3 px-10 bg-gray-800`;

  return (
    <div className="flex justify-center my-6 text-5xl">
      <button className={btnStyles} onClick={() => setCounter(counter - 1)}>
        {' '}
        -{' '}
      </button>
      <p className="mt-2"> {counter} </p>
      <button className={btnStyles} onClick={() => setCounter(counter + 1)}>
        {' '}
        +{' '}
      </button>
    </div>
  );
};
