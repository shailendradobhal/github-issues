import * as ActionTypes from './ActionTypes';
import axios from 'axios';
import parseLink from 'parse-link-header'; 
import { getPageCount } from '../util/commonUtils';

export const issuesLoading = () => ({
  type: ActionTypes.FETCH_ISSUES_REQUEST
});

export const issuesFailed = (errMessage) => ({
  type: ActionTypes.FETCH_ISSUES_FAILURE,
  payload: errMessage
});

export const addIssues = (issues, pageLinks, pageCount) => ({
  type: ActionTypes.FETCH_ISSUES_SUCCESS,
  payload: {
    issues: issues,
    pageLinks: pageLinks,
    pageCount: pageCount
  }
});

export const issueDetailsLoading = () => ({
  type: ActionTypes.FETCH_ISSUE_DETAILS_REQUEST
});

export const issueDetailsFailed = (errMessage) => ({
  type: ActionTypes.FETCH_ISSUE_DETAILS_FAILURE,
  payload: errMessage
});

export const addIssueDetails = (issueDetails) => ({
  type: ActionTypes.FETCH_ISSUE_DETAILS_SUCCESS,
  payload: issueDetails
});

export const fetchIssues = (page = 1) => (dispatch) => {
  dispatch(issuesLoading(true));
  const term = window.location.search.slice(1);
  return axios.get(`https://api.github.com/repos/facebook/react/issues?page=${page}&per_page=25&${term}`)
  .then(issues => {
    const pageLinks = parseLink(issues.headers.link);
    const pageCount = getPageCount(pageLinks);
    dispatch(addIssues(issues, pageLinks, pageCount));
  })
  .catch(err => dispatch(issuesFailed(err)))
}

export const fetchIssueDetails = (number) => (dispatch) => {
  dispatch(issueDetailsLoading(true));
  return axios.get(`https://api.github.com/repos//facebook/react/${number}`)
  .then(details => dispatch(addIssueDetails(details)))
  .catch(err => dispatch(issueDetailsFailed(err)))
}