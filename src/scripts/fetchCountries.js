import { markupCard, markupListCountries } from './markup';
import { errorRequest, error404 } from '../error/Request-error';
import { refs } from './refs';

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
        refs.container.innerHTML = '';
        return error404();
      }
      if (data.length > 10) {
        refs.container.innerHTML = '';
        return errorRequest();
      } else if (data.length < 2) {
        refs.container.innerHTML = '';
        return markupCard(data);
      } else {
        refs.container.innerHTML = '';
        return markupListCountries(data);
      }
    });
}
