import 'isomorphic-fetch';

export function get(url, options) {
  return fetch(url, options)
  .then(checkStatus)
  .then(parseJSON);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json();
}
