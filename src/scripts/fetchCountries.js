import { markupCard, markupListCountries } from './markup';
import { errorRequest, error404 } from '../error/Request-error';

export function fetchCountries(event) {
  const input = event.target.value;
  if (!input) {
    return;
  }
  const fetchUrl = `https://restcountries.eu/rest/v2/name/${input}`;
  fetch(fetchUrl)
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.status > 400) {
        return error404();
      }
      if (data.length > 10) {
        return errorRequest();
      } else if (data.length < 2) {
        return markupCard(data);
      } else {
        return markupListCountries(data);
      }
    });
}
