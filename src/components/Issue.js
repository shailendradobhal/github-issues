import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Issue({ issue }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
      <Link to={`/issues/${issue.number}`}>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{issue.title}</h5>
        </div>
        <p>#{issue.number} opened {new Date(issue.created_at).toDateString()} by {issue.user.login}</p>
      </Link>
      </div>
      <span className="badge badge-primary badge-pill">{issue.comments}</span> 
    </li>
  );
}

Issue.propTypes = {
  issue: PropTypes.shape({
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    user: PropTypes.shape({
      login: PropTypes.string.isRequired
    }).isRequired,
    comments: PropTypes.number.isRequired
  }).isRequired
}

export default Issue;