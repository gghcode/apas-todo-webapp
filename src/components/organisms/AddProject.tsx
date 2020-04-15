import React, { useState } from 'react';

interface Props {
  readonly shouldShow: boolean;
}

export const AddProject = (props: Props) => {
  const [show, setShow] = useState(props.shouldShow);
  const [projectName, setProjectName] = useState('');
  return (
    <div>
      {show && (
        <div>
          <input></input>
          <button></button>
          <span></span>
        </div>
      )}
      <span className="add-project__plus">+</span>
      <span
        aria-label="Add Project"
        data-testid="add-project-action"
        className="add-project__text"
        onClick={() => setShow(!show)}
        onKeyDown={() => setShow(!show)}
        role="button"
        tabIndex={0}
      >
        Add Project
      </span>
    </div>
  );
};
