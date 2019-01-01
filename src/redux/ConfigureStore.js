import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Issues } from './dispatcher/Issues';
import { IssueDetails } from './dispatcher/IssueDetails';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      issues: Issues,
      issueDetails: IssueDetails
    }),
    applyMiddleware(thunk)
  );

  return store;
}