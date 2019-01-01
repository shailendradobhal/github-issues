import createHistory from 'history/createBrowserHistory';
import queryString from 'query-string';

export function QueryStringUtil(q) {
  const history = createHistory();
  const term = queryString.parse(window.location.search);
  term[q.type] = q.value;
  const searchTerm = queryString.stringify(term);
  history.push({
    pathname: "/",
    search: `?${searchTerm}`
  });
}