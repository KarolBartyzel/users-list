import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

function User(props) {
  return (
    <li className="User" key={props.id}>
      <span className="User-Name">{props.name}</span>
      <span className="User-Username">{`@${props.username}`}</span>
    </li>
  );
}

User.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default User;
