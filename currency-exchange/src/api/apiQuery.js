export function apiQuery(base = 'USD') {
  const url = `https://api.exchangerate.host/latest?base=${base}`;

  return new Promise((resolve, reject) => {
      fetch(url)
          .then((response) => {
              resolve(response.json());
          })
          .catch(error=>reject(error));
  })
}
