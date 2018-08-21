import React, { Component } from 'react';
import IssuesList from './IssuesList';
import IssueDetails from './IssueDetails';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import Search from './Search';
import queryString from 'query-string';
import { fetchIssues, fetchIssueDetails } from '../redux/ActionCreators';
import Paginate from 'react-paginate';
import { QueryStringUtil } from '../util/QueryStringUtil';

const mapStateToProps = state => {
  return {
    issues: state.issues,
    issueDetails: state.issueDetails,
    pageCount: state.pageCount,
    pageLinks: state.pageLinks
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

  handlePageChange = (data) => {
    QueryStringUtil({ type: 'page', value: data.selected + 1 });
    this.props.fetchIssues();
  }

  render() {
    const list = this.props.issues;
    const issueDetails = this.props.issueDetails;
    return (
      <div className="container">
        <Navigation />
        <Search fetchIssues={this.props.fetchIssues}/>
        <Switch>
          <Route exact path="/" component={() => <IssuesList isLoading={list.isLoading} errMessage={list.errMessage} issues={list.issues} />} />
          <Route path="/:issueId" component={(props) => <IssueDetails fetchIssueDetails={this.props.fetchIssueDetails} errMessage={issueDetails.errMessage} isLoading={issueDetails.isLoading}  issueDetails={issueDetails.issueDetails} {...props} />} />
        </Switch>
        <nav>
          <Paginate
            forcePage={queryString.parse(window.location.search).page}
            pageCount={this.props.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageChange}
            nextLabel="&rarr;"
            previousLabel="&larr;"
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            activeClassName={"active"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}  />
        </nav>    
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));