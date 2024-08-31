import React from 'react';

export function ExpensiveComponent() {
  const items = Array.from({ length: 100000 }, (_, index) => `Item ${index + 1}`);
  console.log('render');
  return (
    <div>
      <h1>Expensive Component</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export const MemoExpensiveComponent = React.memo(ExpensiveComponent);
