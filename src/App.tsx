import { Game } from './components/Game';
import { Header } from './components/Header';

export const App = () => {
  return (
    <section id="root" className="dark">
      <main
        id="background"
        className="h-screen p-3 justify-center text-center dark:bg-black2 bg-gray1"
      >
        <Header />
        <Game />
      </main>
    </section>
  );
};
