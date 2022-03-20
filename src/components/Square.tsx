import { FC } from 'react';

type SquareProps = {
  inActiveRow: boolean;
  key: number;
};

const activeSquareClasses = '';
let rowClasses = '';

export const Square: FC<SquareProps> = ({ inActiveRow, key }) => {
  rowClasses = inActiveRow
    ? 'dark:bg-transparent dark:border-black4'
    : 'dark:border-black3 dark:bg-black3';
  return (
    <div
      key={key}
      className={'h-14 w-14 border-4 rounded-md ' + rowClasses}
    ></div>
  );
};
