import { FC } from 'react';

type KeyProps = {
  letter: string;
};

export const Key: FC<KeyProps> = ({ letter }) => {
  return <span>{letter}</span>;
};
