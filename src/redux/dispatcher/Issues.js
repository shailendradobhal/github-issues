import * as ActionTypes from '../ActionTypes';

//reducer
export const Issues = (state = {
  isLoading: true,
  errMessage: null,
  issues: []
}, action) => {
  switch(action.type) {
    case ActionTypes.FETCH_ISSUES_SUCCESS:
      return {...state, isLoading: false, errMessage: null, issues: action.payload}
      
    case ActionTypes.FETCH_ISSUES_REQUEST:
      return {...state, isLoading: true, errMessage: null, issues: []}

    case ActionTypes.FETCH_ISSUES_FAILURE:
      return {...state, isLoading: false, errMessage: action.payload, issues: []}

    default: 
      return state;
  }
}