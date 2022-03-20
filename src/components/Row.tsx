import { FC, useState } from 'react';
import { Square } from './Square';

type RowProps = {
  key: number;
  active: boolean;
};

export const Row: FC<RowProps> = (props) => {
  const [activeSquare, setActiveSquare] = useState(0);
  return (
    <div
      key={props.key}
      className="flex flex-row gap-1 justify-center align-center"
    >
      <Square key={0} inActiveRow={props.active} />
      <Square key={1} inActiveRow={props.active} />
      <Square key={2} inActiveRow={props.active} />
      <Square key={3} inActiveRow={props.active} />
      <Square key={4} inActiveRow={props.active} />
    </div>
  );
};
