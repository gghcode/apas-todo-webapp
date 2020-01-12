import * as React from 'react';
import { useParams } from 'react-router';

export const TodosDetail: React.FC = () => {
  const { id } = useParams();
  console.log('id', id);
  return (
    <div>
      <p>Todos Detail {id}</p>
    </div>
  );
};
