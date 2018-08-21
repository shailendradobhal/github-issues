    import React, {Component} from 'react';

class IssueDetails extends Component {

  render() {
    const { isLoading, errMessage, issueDetails } = this.props;
    if(isLoading) {
      return <div>Loading...</div>
    } else if (errMessage) {
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
            <div class="form-group">
              <label for="comment">Comment</label>
              <textarea class="form-control" id="comment" rows="3"></textarea>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default IssueDetails;