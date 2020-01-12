import * as React from 'react';
import './Header.css';

interface Props {
  title: string;
}

export const Header: React.FC<Props> = (props) => {
  const { title } = props;

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
