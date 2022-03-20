type SquareProps = {
  squareIndex: number;
};

export const Square = (props: SquareProps) => {
  return (
    <div
      key={props.squareIndex}
      className="h-14 w-14 border-4 rounded-md border-black3 bg-black3"
    ></div>
  );
};
