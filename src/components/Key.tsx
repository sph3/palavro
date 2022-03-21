type KeyProps = React.ComponentProps<'button'> & {
  dataKey: string;
};

export const Key = (props: KeyProps) => {
  if (props.children) {
    return (
      <button className=" h-12 w-7 justify-center bg-red border-0 rounded-md">
        {props.children}
      </button>
    );
  }
  return (
    <>
      {props.dataKey === 'ENTER' ? (
        <button className="h-12 w-20 text-center bg-sky text-black1 font-medium border-0 rounded-md">
          {props.dataKey.toUpperCase()}
        </button>
      ) : (
        <button className="h-12 w-7 text-center bg-black3 text-white font-medium border-0 rounded-md">
          {props.dataKey.toUpperCase()}
        </button>
      )}
    </>
  );
};
