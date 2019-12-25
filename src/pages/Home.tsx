import React, { useEffect, useState } from 'react';
import { useStore } from '@/context/store';
import { MasterDetail } from '@/components/MasterDetail';
import { TodosDetail } from '@/pages/Detail/TodosDetail';
import { TodoCategoryMaster } from '@/pages/Master/TodoCategoryMaster';
import './Home.css';
import { TodoCategory } from '@/domain/todo/interactor';

export const Home: React.FC = () => {
  const [categories, setCategories] = useState([] as TodoCategory[]);
  const [category, setCategory] = useState();

  const { userStore, todoStore } = useStore();

  useEffect(() => {
    todoStore
      .fetchTodoCategories()
      .then((categories: TodoCategory[]) => setCategories(categories));
  }, []);

  useEffect(() => {
    console.log('hello');
    todoStore.fetchTodos();
  }, category);

  useEffect(() => {
    const res = userStore.me().then((a) => console.log(a));
  }, []);
  // const res = userStore.me().then((a) => toast(`hi ${a.username}!`));

  return (
    <div>
      <MasterDetail
        MasterType={TodoCategoryMaster}
        masterProps={{
          categories: categories,
          onSelectCategory: (category: TodoCategory) => setCategory(category),
        }}
        DetailType={TodosDetail}
        detailProps={{}}
      />
    </div>
  );
};
