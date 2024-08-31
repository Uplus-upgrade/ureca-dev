import React, { useMemo, useState } from 'react';

const hardCalculate = (number) => {
  console.log('어려운 계산!');
  for (let i = 0; i < 99999999 * 4; i++) {} // 생각하는 시간
  return number + 10000;
};
const easyCalculate = (number) => {
  console.log('쉬운 계산!');
  return number + 1;
};

export default function UseMemoPage() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  const useMemoHardSum = useMemo(() => hardCalculate(hardNumber), [hardNumber]);
  //   const useMemoEasySum = useMemo(() => easyCalculate(easyNumber), [easyNumber]);

  const hardSum = hardCalculate(hardNumber);
  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {useMemoHardSum}</span>

      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span> + 1 = {easySum}</span>
    </div>
  );
}
