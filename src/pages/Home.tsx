import React, { useEffect, useState } from 'react';
import { useStore } from '@/context/store';
import { MasterDetail } from '@/components/MasterDetail';
import { TodosDetail } from '@/pages/Detail/TodosDetail';
import { TodoCategoryMaster } from '@/pages/Master/TodoCategoryMaster';
import './Home.css';
import { TodoCategory } from '@/domain/todo';

export const Home: React.FC = () => {
  const [categories, setCategories] = useState([] as TodoCategory[]);
  const [category, setCategory] = useState();
  const { userStore, todoStore } = useStore();

  useEffect(() => {
    const asyncFunc = async () => {
      // const [categories, err] = await todoStore.getTodoCategories();
      // setCategories(categories!);
    };

    asyncFunc();
  }, [todoStore]);

  useEffect(() => {
    // todoStore.fetchTodos();
  }, [todoStore]);

  useEffect(() => {
    // const res = userStore.me().then((a) => console.log(a));
  }, [userStore]);

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
