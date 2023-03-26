import './css/styles.css';

import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { fetchCountries } from './js/fetchCountries.js';
import { countryList, countryInfo } from './js/markupCountries';

const DEBOUNCE_DELAY = 300;

const searchEl = document.querySelector('#search-box');
const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');

searchEl.addEventListener(
  'input',
  debounce(handleSearchCountry, DEBOUNCE_DELAY)
);

function handleSearchCountry(e) {
  const searchQuery = e.target.value.trim();

  if (!searchQuery) {
    removeMarkup(countryListEl);
    removeMarkup(countryInfoEl);
    return;
  }

  fetchCountries(searchQuery)
    .then(data => {
      if (data.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name'
        );
        return;
      }
      renderMarkup(data);
    })
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
    });
}

const renderMarkup = data => {
  if (data.length === 1) {
    removeMarkup(countryListEl);
    createCountryInfo(data);
  } else {
    removeMarkup(countryInfoEl);
    createCountryList(data);
  }
};

function createCountryList(data) {
  const markup = data.map(countryList).join('');
  countryListEl.innerHTML = markup;
}

function createCountryInfo(data) {
  const markup = data.map(countryInfo);
  countryInfoEl.innerHTML = markup;
}

function removeMarkup(e) {
  e.innerHTML = '';
}
