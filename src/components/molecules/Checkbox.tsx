import * as React from 'react';

interface Props {
  readonly id: number;
}

export const Checkbox = (props: Props) => {
  const archiveTask = () => {};

  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={() => archiveTask()}
    >
      <span className="checkbox" />
    </div>
  );
};
