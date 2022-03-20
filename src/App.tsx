import { Header } from './components/Header';

export const App = () => {
  return (
    <section id="root" className="dark">
      <section
        id="background"
        className="h-screen flex justify-center align-center dark:bg-black2 bg-gray1"
      >
        <Header />
      </section>
    </section>
  );
};
