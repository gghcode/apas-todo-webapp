import React from 'react';
import { useStore } from '@/stores';

export const Home: React.FC = () => {
  const { userStore } = useStore();
  const res = userStore.me().then((a) => console.log(a));

  return (
    <div>
      <p>Hello</p>
    </div>
  );
};
