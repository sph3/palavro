import { FC, useState } from 'react';

type SquareProps = {
  inActiveRow: boolean;
  squareId: number;
  activeSquare: number;
  focusSquare: (squareKey: number) => void;
};

let squareClasses = '';
let rowClasses = '';

export const Square: FC<SquareProps> = ({
  inActiveRow,
  squareId,
  activeSquare,
  focusSquare,
}) => {
  rowClasses = inActiveRow
    ? 'dark:bg-transparent dark:border-black4'
    : 'dark:border-black3 dark:bg-black3';

  squareClasses = activeSquare === squareId ? 'border-b-8' : '';

  const handleClick = () => {
    focusSquare(squareId);
  };
  return (
    <div
      id={squareId.toString()}
      onClick={handleClick}
      className={
        'h-14 w-14 border-4 rounded-md ' + rowClasses + ' ' + squareClasses
      }
    ></div>
  );
};
