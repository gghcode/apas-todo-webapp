import React, { useEffect } from 'react';
import { useStore } from '@/context/store';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Home: React.FC = () => {
  const { userStore, todoStore } = useStore();

  useEffect(() => {
    todoStore.todos();
  }, []);

  useEffect(() => {
    const res = userStore.me().then((a) => console.log(a));
  }, []);
  // const res = userStore.me().then((a) => toast(`hi ${a.username}!`));

  return (
    <div>
      <p>Hello</p>
    </div>
  );
};
