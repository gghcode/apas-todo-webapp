import React, { useState } from 'react';

interface Props {
  projects: any[];
  activeValue?: any;
}

export const Projects: React.FC<Props> = ({ projects, activeValue }) => {
  const [active, setActive] = useState(activeValue);

  const projectsElement =
    projects &&
    projects.map((project) => (
      <li
        key={project.projectId}
        data-doc-id={project.docId}
        data-testid="project-action"
        className={
          active === project.projectId
            ? 'active sidebar__project'
            : 'sidebar__project'
        }
        onKeyDown={() => {
          setActive(project.projectId);
        }}
        onClick={() => {
          setActive(project.projectId);
        }}
      >
        {JSON.stringify(project)}
      </li>
    ));

  return <>{projectsElement}</>;
};
