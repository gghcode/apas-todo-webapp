import React, { useEffect, useState } from 'react';
import { MasterDetail } from '@/components/MasterDetail';
import { TodosDetail } from '@/pages/Detail/TodosDetail';
import { TodoCategoryMaster } from '@/pages/Master/TodoCategoryMaster';
import { TodoCategory } from '@/domain/todo';
import { useUsecase } from '@/context/domain';
import './Home.css';

export const Home: React.FC = () => {
  const [categories, setCategories] = useState([] as TodoCategory[]);
  const [category, setCategory] = useState();
  const { todoUsecase } = useUsecase();

  useEffect(() => {
    todoUsecase
      .getTodoCategories()
      .then((categories) => setCategories(categories));
  }, [todoUsecase]);

  useEffect(() => {
    todoUsecase.getTodos().then((todos) => console.log(todos));
  }, [category, todoUsecase]);

  // useEffect(() => {
  //   // const res = userStore.me().then((a) => console.log(a));
  // }, [userStore]);

  return (
    <MasterDetail
      MasterType={TodoCategoryMaster}
      masterProps={{
        categories: categories,
        onSelectCategory: (category: TodoCategory) => setCategory(category),
      }}
      DetailType={TodosDetail}
      detailProps={{}}
    />
  );
};
