export default async function apiQuery(base = 'USD') {
  const url = `https://api.exchangerate.host/latest?base=${base}`;
  let response = await fetch(url).catch((e) => {
    console.log('Api error')
  });

  return response.json();
}
