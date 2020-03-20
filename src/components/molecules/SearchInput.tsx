import * as React from 'react';
import './searchInput.scss';

type Props = {
  readonly placeholder: string;
};

const SearchInput = (props: Props) => {
  return (
    <div className="container">
      <input
        className="form-control"
        type="text"
        placeholder={props.placeholder}
      />
      <span className="fa fa-search" />
      {/* <i aria-hidden="true" className="search icon" /> */}
    </div>
  );
};

export default SearchInput;
