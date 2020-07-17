import { refs } from './refs';
import templateCard from '../template/template-card.hbs';
import listCountries from '../template/list-elements.hbs';

export function markupCard(card) {
  const cardMarkup = templateCard(card);
  refs.container.insertAdjacentHTML('beforeend', cardMarkup);
  addEventBtn();
}

function addEventBtn() {
  refs.container.addEventListener('click', closeCard);
}
function closeCard(event) {
  if (event.target.nodeName === 'BUTTON') {
    refs.container.innerHTML = '';
    refs.input.value = '';
  }
}

export function markupListCountries(name) {
  const countriesName = listCountries(name);
  refs.container.insertAdjacentHTML('beforeend', countriesName);
  addEventBtn();
}
