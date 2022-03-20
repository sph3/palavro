import { FC, useState } from 'react';
import { Square } from './Square';

type RowProps = {
  rowId: number;
  active: boolean;
};

export const Row: FC<RowProps> = (props) => {
  const [activeSquareKey, setActiveSquareKey] = useState(0);

  const selectSquareHandler = (squareKey: number) => {
    console.log('Clicked square ' + squareKey);
    setActiveSquareKey(squareKey);
  };

  return (
    <div
      id={props.rowId.toString()}
      className="flex flex-row gap-1 justify-center align-center"
    >
      <Square
        squareId={0}
        inActiveRow={props.active}
        activeSquare={activeSquareKey}
        focusSquare={selectSquareHandler}
      />
      <Square
        squareId={1}
        inActiveRow={props.active}
        activeSquare={activeSquareKey}
        focusSquare={selectSquareHandler}
      />
      <Square
        squareId={2}
        inActiveRow={props.active}
        activeSquare={activeSquareKey}
        focusSquare={selectSquareHandler}
      />
      <Square
        squareId={3}
        inActiveRow={props.active}
        activeSquare={activeSquareKey}
        focusSquare={selectSquareHandler}
      />
      <Square
        squareId={4}
        inActiveRow={props.active}
        activeSquare={activeSquareKey}
        focusSquare={selectSquareHandler}
      />
    </div>
  );
};
