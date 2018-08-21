import React from 'react';
import { Link } from 'react-router-dom';

function Issue(props) {
  const issue = props.issue;
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

export default Issue;