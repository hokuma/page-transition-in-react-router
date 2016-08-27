import { browserHistory } from 'react-router';

export function sendName(name) {
  browserHistory.push({
    pathname: '/hello',
    query: { name },
  });
}
