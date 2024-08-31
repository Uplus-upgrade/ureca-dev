import React, { useEffect, useState } from 'react';
import { getList } from '../apis/getList';

export default function Test() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getList(setData);
      setData(result);
      console.log(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => {
        return <div>{item.title}</div>;
      })}
    </div>
  );
}
