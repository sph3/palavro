import { FC } from 'react';

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
    ? 'bg-transparent border-black4'
    : 'border-black3 bg-black3';

  squareClasses = activeSquare === squareId ? 'border-b-8' : '';

  const handleClick = () => {
    focusSquare(squareId);
  };
  return (
    <button
      id={squareId.toString()}
      onClick={handleClick}
      className={
        'transition-all duration-75 h-14 w-14 border-4 rounded-md ' +
        rowClasses +
        ' ' +
        squareClasses
      }
    ></button>
  );
};
