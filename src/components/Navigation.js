import React from 'react';

function Navigation(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link active" href="#">Issues
          <span className="badge badge-primary badge-pill">{1233}</span> {/*milestone key was null so could not get open_issues*/}
        </a>
      </li>
    </ul>
  );
}

export default Navigation;