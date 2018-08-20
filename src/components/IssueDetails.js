import React, {Component} from 'react';

class IssueDetails extends Component {

  componentDidMount() {
    console.log(this.props.isLoading);
    this.props.fetchIssueDetails(this.props.match.params.issueId);
  }

  render() {
    const { isLoading, errMessage, issueDetails } = this.props;
    if(isLoading) {
      return <h1>Loading...</h1>
    } else if (errMessage) {
      return <div>{errMessage.message}</div>
    } else {
      return (
        <div className="container">
          <h1>
            <span className="d-block">{issueDetails.title}</span>
            <span className="d-block">{issueDetails.number}</span>
          </h1>
          <p>Status: {issueDetails.state}  opened this issue on {new Date(issueDetails.created_at).toDateString()}</p>
          <p>{issueDetails.body}</p>
        </div>
      );
    }
  }
}

export default IssueDetails;