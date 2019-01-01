import * as ActionTypes from '../ActionTypes';

//reducer
export const IssueDetails = (state = {
  isLoading: true,
  errMessage: null,
  issueDetails: {}
}, action) => {
  switch(action.type) {
    case ActionTypes.FETCH_ISSUE_DETAILS_SUCCESS:
      return {...state, isLoading: false, errMessage: null, issueDetails: action.payload}
      
    case ActionTypes.FETCH_ISSUE_DETAILS_REQUEST:
      return {...state, isLoading: true, errMessage: null, issueDetails: {}}

    case ActionTypes.FETCH_ISSUE_DETAILS_FAILURE:
      return {...state, isLoading: false, errMessage: action.payload, issueDetails: {}}

    default: 
      return state;
  }
}