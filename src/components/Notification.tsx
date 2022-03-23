import { FC, useEffect, useState } from 'react';

type NotificationType = {
  color?: string;
  message?: string;
};

export const Notification: FC<NotificationType> = ({ color, message }) => {
  return (
    <section
      id="notify-root"
      className="h-12 mt-8 transition-all duration-100 animate-bounce"
    >
      <div
        className={`rounded-md flex justify-center items-center h-11 w-2/3 m-auto text-center bg-${color}`}
      >
        <p className="font-medium text-black3">{message}</p>
      </div>
    </section>
  );
};
