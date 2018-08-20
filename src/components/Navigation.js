import React from 'react';

function Navigation(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link active" href="#">Issues
          <span className="badge badge-primary badge-pill">{props.length}</span>
        </a>
      </li>
    </ul>
  );
}

export default Navigation;