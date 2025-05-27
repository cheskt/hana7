'use client';

import { useReducer } from 'react';

export default function Night() {
  const [isLoading, toggleLoading] = useReducer((p) => !p, false);

  return (
    <>
      <h1>Good Night~~</h1>
      {isLoading && <h3>...</h3>}
      <button onClick={toggleLoading}>Toggle</button>
    </>
  );
}
