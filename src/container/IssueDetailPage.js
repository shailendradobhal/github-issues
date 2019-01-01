import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import IssueDetails from '../components/IssueDetails';
import { fetchIssueDetails } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    issueDetails: state.issueDetails
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchIssueDetails: (number) => { dispatch(fetchIssueDetails(number)) }
  }
}

class IssueDetailPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchIssueDetails(this.props.match.params.issueId);
  }

  render() {
    const issueDetails = this.props.issueDetails;
    return (
      <IssueDetails fetchIssueDetails={this.props.fetchIssueDetails} errMessage=  {issueDetails.errMessage} isLoading={issueDetails.isLoading}  issueDetails={issueDetails.issueDetails.data} />
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IssueDetailPage));