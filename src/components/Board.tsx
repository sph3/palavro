import { useState } from 'react';
import { Row } from './Row';

export const Board = () => {
  const [activeRow, setActiveRow] = useState('0');
  return (
    <section id="board" className="flex px-7 flex-col gap-1 mt-16">
      <Row key={0} active={true} />
      <Row key={1} active={false} />
      <Row key={2} active={false} />
      <Row key={3} active={false} />
      <Row key={4} active={false} />
      <Row key={5} active={false} />
    </section>
  );
};
