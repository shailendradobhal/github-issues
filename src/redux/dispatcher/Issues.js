import * as ActionTypes from '../ActionTypes';

//reducer
export const Issues = (state = {
  isLoading: true,
  errMessage: null,
  issues: [],
  pageCount: 0,
  pageLinks: {}
}, action) => {
  switch(action.type) {
    case ActionTypes.FETCH_ISSUES_SUCCESS:
      return {...state, isLoading: false, errMessage: null, issues: action.payload.issues, pageCount: action.payload.pageCount, pageLinks: action.payload.pageLinks}
      
    case ActionTypes.FETCH_ISSUES_REQUEST:
      return {...state, isLoading: true, errMessage: null, issues: [], pageCount: 0, pageLinks: {}}

    case ActionTypes.FETCH_ISSUES_FAILURE:
      return {...state, isLoading: false, errMessage: action.payload, issues: [], pageCount: 0, pageLinks: {}}

    default: 
      return state;
  }
}