import React, { Component } from 'react';
import Paginate from 'react-paginate';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';
import Navigation from '../components/Navigation';
import Search from '../components/Search';
import { fetchIssues } from '../redux/ActionCreators';
import { QueryStringUtil } from '../util/QueryStringUtil';
import IssuesList from '../components/IssuesList';

const mapStateToProps = state => {
  return {
    issues: state.issues,
    pageCount: state.pageCount,
    pageLinks: state.pageLinks
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchIssues: () => { dispatch(fetchIssues()) }
  }
}

class Main extends Component {

  componentDidMount() {
    this.props.fetchIssues();
  }

  handlePageChange = (data) => {
    QueryStringUtil({ type: 'page', value: Number(data.selected) + 1});
    this.props.fetchIssues();
  }

  render() {
    const list = this.props.issues;
    return (
      <div className="container">
        <Navigation />
        <Search fetchIssues={this.props.fetchIssues}/>
        <IssuesList isLoading={list.isLoading} errMessage={list.errMessage} issues={list.issues} />
        <nav>
          <Paginate
            forcePage={Number(queryString.parse(window.location.search).page - 1) || 0}
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