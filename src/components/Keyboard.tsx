import { Key } from './Key';

export const Keyboard = () => {
  return (
    <section id="keyboard-root" className="flex flex-col mt-20 gap-3">
      <div id="row-1" className="flex flex-row justify-center gap-1">
        <Key dataKey="q" />
        <Key dataKey="w" />
        <Key dataKey="e" />
        <Key dataKey="r" />
        <Key dataKey="t" />
        <Key dataKey="y" />
        <Key dataKey="u" />
        <Key dataKey="i" />
        <Key dataKey="o" />
        <Key dataKey="p" />
      </div>
      <div id="row-2" className="flex flex-row justify-center gap-1 ml-10">
        <Key dataKey="a" />
        <Key dataKey="s" />
        <Key dataKey="d" />
        <Key dataKey="f" />
        <Key dataKey="g" />
        <Key dataKey="h" />
        <Key dataKey="j" />
        <Key dataKey="k" />
        <Key dataKey="l" />

        <Key dataKey="backspace">
          <svg
            fill="#1A1826"
            width={21}
            height={20}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path d="M576 64H205.26A63.97 63.97 0 0 0 160 82.75L9.37 233.37c-12.5 12.5-12.5 32.76 0 45.25L160 429.25c12 12 28.28 18.75 45.25 18.75H576c35.35 0 64-28.65 64-64V128c0-35.35-28.65-64-64-64zm-84.69 254.06c6.25 6.25 6.25 16.38 0 22.63l-22.62 22.62c-6.25 6.25-16.38 6.25-22.63 0L384 301.25l-62.06 62.06c-6.25 6.25-16.38 6.25-22.63 0l-22.62-22.62c-6.25-6.25-6.25-16.38 0-22.63L338.75 256l-62.06-62.06c-6.25-6.25-6.25-16.38 0-22.63l22.62-22.62c6.25-6.25 16.38-6.25 22.63 0L384 210.75l62.06-62.06c6.25-6.25 16.38-6.25 22.63 0l22.62 22.62c6.25 6.25 6.25 16.38 0 22.63L429.25 256l62.06 62.06z" />
          </svg>
        </Key>
      </div>
      <div id="row-3" className="ml-16 flex flex-row justify-center gap-1">
        <Key dataKey="z" />
        <Key dataKey="x" />
        <Key dataKey="c" />
        <Key dataKey="v" />
        <Key dataKey="b" />
        <Key dataKey="n" />
        <Key dataKey="m" />
        <Key dataKey="ENTER" />
      </div>
    </section>
  );
};
