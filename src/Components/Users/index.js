import React from 'react';

import User from './../User';
import './index.css';

function Users(props) {
  if (props.users.length === 0) {
    return (
      <div className="No-Users">No user matched your search. Try again.</div>
    );

  }
  return (
    <ol className="Users">
      {props.users.map((user) => (
        <User {...user} />
      ))}
    </ol>
  );
}

export default Users;
