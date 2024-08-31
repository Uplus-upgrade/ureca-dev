import React from 'react';

export default function ParentComponentHaveChildren({ children }) {
  const [count, setCount] = React.useState(0);
  const handleOnclick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <button onClick={handleOnclick}>Click</button>
      <div>{count}</div>
      {children}
    </div>
  );
}
