import React from 'react';
import Issue from './Issue';

function IssuesList({isLoading, errMessage, issues, fetchIssues}) {
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

export default IssuesList;