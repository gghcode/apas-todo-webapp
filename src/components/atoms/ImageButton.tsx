import * as React from 'react';

interface Props {
  image: any;
}

export const ImageButton = (props: Props) => {
  const Image = props.image;

  return (
    <button>
      <Image size="20" />
    </button>
  );
};
