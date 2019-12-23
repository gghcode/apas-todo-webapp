import * as React from 'react';
import { Header } from '@/components/Header';
import { NavLink } from 'react-router-dom';

interface Props {
  categories: any[];
}

export const TodoCategoryMaster: React.FC<Props> = (props) => {
  const { categories } = props;
  console.log('ab', categories);
  const categoriesView = categories.map((item: string) => (
    <li key={item}>
      <NavLink exact to={`/detail/3`}>
        <p>{item}</p>
      </NavLink>
      {/* <p>{item}</p> */}
    </li>
  ));

  return (
    <div>
      <Header title="categories" />
      <ul>{categoriesView}</ul>
    </div>
  );
};
