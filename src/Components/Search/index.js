import React from 'react';

import './index.css';

function Search(props) {
  function onUserSearchChange({ target: { value } }) {
    props.setValue(value);
  }

  return (
    <input className="Search" value={props.value} onChange={onUserSearchChange} placeholder="Search by user name..." />
  );
}

export default Search;
