import { FC, useState } from 'react';
import { Square } from './Square';

type RowProps = {
  rowIndex: number;
};

export const Row = (props: RowProps) => {
  const [activeRow, setActiveRow] = useState('0');
  return (
    <div
      key={props.rowIndex}
      className="flex flex-row gap-1 justify-center align-center"
    >
      <Square squareIndex={0} />
      <Square squareIndex={1} />
      <Square squareIndex={2} />
      <Square squareIndex={3} />
      <Square squareIndex={4} />
    </div>
  );
};
