import React from 'react';
import Issue from './Issue';
import PropTypes from 'prop-types';

function IssuesList({isLoading, errMessage, issues}) {
  console.log(issues);
  if(isLoading) {
    return <div>Loading....</div>
  } else if (errMessage) {
    return <div>{errMessage.message}</div>
  } else {
    return (
      <div>
        <ul className="pl-0">
          {issues.data.map(issue => <Issue key={issue.id} issue={issue} />)}
        </ul>
      </div>
    );
  } 
}

IssuesList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  errMessage: PropTypes.shape({
    message: PropTypes.string
  }),
  issue: PropTypes.oneOfType([PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object)
  }), PropTypes.array])
}

export default IssuesList;