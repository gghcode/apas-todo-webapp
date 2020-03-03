import * as React from 'react';
import { Checkbox } from '../atoms/Checkbox';

export const Tasks = () => {
  const tasks: any[] = [
    {
      id: 1,
      task: 'This is video',
    },
  ];

  let projectName = '';
  console.log(tasks);
  return (
    <div className="taks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>
      <ul className="tasks__list">
        {tasks.map((task) => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
