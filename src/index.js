import './styles.css';
import { fetchCountries } from './scripts/fetchCountries';
import { refs } from './scripts/refs';
const debounce = require('lodash.debounce');
refs.input.addEventListener('input', debounce(fetchCountries, 800));
