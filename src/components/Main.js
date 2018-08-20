import React, { Component } from 'react';
import IssuesList from './IssuesList';
import IssueDetails from './IssueDetails';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import Search from './Search';

import { fetchIssues, fetchIssueDetails } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    issues: state.issues,
    issueDetails: state.issueDetails
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchIssues: () => { dispatch(fetchIssues()) },
    fetchIssueDetails: (number) => { dispatch(fetchIssueDetails(number)) }
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchIssues();
  }

  render() {
    const list = this.props.issues;
    const issueDetails = this.props.issueDetails;

    return (
      <div className="container">
        <Navigation list={list} />
        <Search fetchIssues={this.props.fetchIssues}/>
        <Switch>
          <Route exact path="/" component={() => <IssuesList isLoading={list.isLoading} errMessage={list.errMessage} issues={list.issues} />} />
          <Route path="/:issueId" component={(props) => <IssueDetails fetchIssueDetails={this.props.fetchIssueDetails} errMessage={issueDetails.errMessage} isLoading={issueDetails.isLoading}  issueDetails={issueDetails.issueDetails} {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));