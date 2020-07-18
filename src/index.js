import './styles.css';
import { fetchCountries } from './scripts/fetchCountries';
import { refs } from './scripts/refs';
import debounce from 'lodash.debounce';
refs.input.addEventListener('input', debounce(fetchCountries, 800));
