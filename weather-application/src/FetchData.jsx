export default async function FetchData(searchCity) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=a943ce22e71641d891071435260606&q=${searchCity}`
  );
  const data = await response.json();
  return data;
}