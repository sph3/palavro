import { FC, useState } from 'react';
import { Row } from './Row';

export const Board: FC<any> = () => {
  const [activeRow, setActiveRow] = useState(0);

  return (
    <section id="board" className="flex flex-col gap-1 mt-16">
      <Row rowId={0} active={true} />
      <Row rowId={1} active={false} />
      <Row rowId={2} active={false} />
      <Row rowId={3} active={false} />
      <Row rowId={4} active={false} />
      <Row rowId={5} active={false} />
    </section>
  );
};
