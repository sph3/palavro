import { FC, useState } from 'react';

type SquareProps = {
  inActiveRow: boolean;
  key: number;
};

let squareClasses = '';
let rowClasses = '';

export const Square: FC<SquareProps> = ({ inActiveRow, key }) => {
  rowClasses = inActiveRow
    ? 'dark:bg-transparent dark:border-black4'
    : 'dark:border-black3 dark:bg-black3';

  squareClasses = '';
  return (
    <div
      key={key}
      className={'h-14 w-14 border-4 rounded-md ' + rowClasses}
    ></div>
  );
};
