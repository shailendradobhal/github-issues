import React, {Component} from 'react';
import PropTypes from 'prop-types';

function IssueDetails({ isLoading, errMessage, issueDetails }) {
  if(isLoading) {
    return <div>Loading...</div>
  } else if (errMessage) {
    console.log(errMessage);
    return <div>{errMessage.message}</div>
  } else {
    return (
      <div className="container justify-content-center">
        <h1>
          <span className="d-block">{issueDetails.title}</span>
          <span className="d-block">#{issueDetails.number}</span>
        </h1>
        <p>Status: {issueDetails.state}, <strong>${issueDetails.user.login}</strong>  opened this issue on {new Date(issueDetails.created_at).toDateString()}</p>
        <div className="container">
          <p className="border border-primary text-center">{issueDetails.body}</p>
          <div className="form-group">
            <label htmlFor="comment">Comment</label>
            <textarea className="form-control" id="comment" rows="3"></textarea>
          </div>
        </div>
      </div>
    );
  }
}

IssueDetails.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  errMessage: PropTypes.shape({
    message: PropTypes.string
  }),
  issueDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    user: PropTypes.shape({
      login: PropTypes.string.isRequired
    }),
    created_at: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
}

export default IssueDetails;