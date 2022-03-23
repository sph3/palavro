import { useEffect, useState } from 'react';
import { Game } from './components/Game';
import { Header } from './components/Header';
import { Keyboard } from './components/Keyboard';
import { Notification } from './components/Notification';

type NotificationType = {
  color: string;
  message: string;
};

export const App = () => {
  const [notify, setNotify] = useState({} as NotificationType);

  useEffect(() => {
    setNotify({ color: 'sky', message: 'Mensagem inútil!' });
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }, []);

  return (
    <section id="root" className="dark">
      <main
        id="background"
        className="py-2 justify-center text-center dark:bg-black1 bg-gray1"
      >
        <Header />
        <Notification color={notify.color} message={notify.message} />
        <Game />
        <Keyboard />
      </main>
    </section>
  );
};
