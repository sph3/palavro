import { Row } from './Row';

export const Board = () => {
  return (
    <section id="board" className="flex px-7 flex-col gap-1 mt-16">
      <Row rowIndex={0} />
      <Row rowIndex={1} />
      <Row rowIndex={2} />
      <Row rowIndex={3} />
      <Row rowIndex={4} />
      <Row rowIndex={5} />
    </section>
  );
};
