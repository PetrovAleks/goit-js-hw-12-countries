import { refs } from './refs';
import templateCard from '../template/template-card.hbs';
import listCountries from '../template/list-elements.hbs';

export function markupCard(card) {
  const cardMarkup = templateCard(card);
  refs.container.insertAdjacentHTML('beforeend', cardMarkup);
}

export function markupListCountries(name) {
  const countriesName = listCountries(name);
  refs.container.insertAdjacentHTML('beforeend', countriesName);
}
