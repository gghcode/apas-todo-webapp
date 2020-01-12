import * as React from 'react';
import { Header } from '@/components/Header';
import { NavLink } from 'react-router-dom';
import { TodoCategory } from '@/domain/todo/interactor';

interface Props {
  categories: TodoCategory[];
  onSelectCategory: (category: TodoCategory) => void;
}

export const TodoCategoryMaster: React.FC<Props> = (props) => {
  const { categories, onSelectCategory } = props;

  const categoriesView = categories.map((item: TodoCategory) => (
    <li key={item.name} onClick={(e) => onSelectCategory(item)}>
      <p>Hello</p>
      <NavLink exact to={`/todos/detail/3`}>
        <p>{item.name}</p>
      </NavLink>
    </li>
  ));

  return (
    <div>
      <Header title="categories" />
      <ul>{categoriesView}</ul>
    </div>
  );
};
