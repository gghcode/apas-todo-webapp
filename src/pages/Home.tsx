import React, { useEffect, useState } from 'react';
import { MasterDetail } from '@/components/MasterDetail';
import { TodosDetail } from '@/pages/Detail/TodosDetail';
import { TodoCategoryMaster } from '@/pages/Master/TodoCategoryMaster';
import { TodoCategory } from '@/core/entities';
import { useUsecase } from '@/context/domain';
import './Home.css';

export const Home: React.FC = () => {
  const [categories, setCategories] = useState([] as TodoCategory[]);
  const [category, setCategory] = useState();
  const { todoInteractor } = useUsecase();

  useEffect(() => {
    // todoInteractor
    //   .getTodoCategories()
    //   .then((categories) => setCategories(categories));
  }, [todoInteractor]);

  useEffect(() => {
    todoInteractor.getTodos().then((todos) => console.log(todos));
  }, [category, todoInteractor]);

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
