import React, { useEffect, useState } from 'react';
import Select from 'components/index';
import { ISelect } from 'interfaces/global';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Test: React.FC = () => {
  const [values, setValues] = useState<ISelect.OptionType[]>([]);
  const [count, setCount] = useState<number>(20);

  const transformData = (data: Post[]): ISelect.OptionType[] =>
    data.map(post => ({
      value: post.id,
      id: post.id
    }));

  const handleLoadMoreRows = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');

      const data: Post[] = await response.json();

      const transformedData = transformData(data);

      const filteredData = transformedData.filter((data, idx) => idx < count);

      setValues(filteredData);
      setCount(count + 10);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // const data = new Array(5000).fill(1).map((_, idx) => ({
    //   id: idx,
    //   value: idx
    // }));

    // setValues(data);

    handleLoadMoreRows();
  }, []);

  return <Select values={values} loadMoreRows={handleLoadMoreRows} components={{ List: () => <div></div> }} />;
};

export default Test;
