import './css/styles.css';
import { markupFindElement, markupCountrySearch, renderMarkupList } from './js/country-card';
import { fetchCountriesfromServer } from './js/fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
const DEBOUNCE_DELAY = 300;


const refs = {
    searchBox: document.querySelector('#search-box'),
    countriesUl: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),};

refs.searchBox.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(event) {
    event.preventDefault();
    clear();

    const searchQuery = refs.searchBox.value.trim();
       
    if (searchQuery === '') {
        return;
    }
    fetchCountriesfromServer(searchQuery)
        .then((countriesArr) => {

            const countriesArrEdit = countriesArr.map(country => (
                {
                ...country,
                flags: country.flags.svg,
                name: country.name.common
                }
            ))
                 
            if (countriesArr.length > 10) {
                tooFewLetters();
            };
            if (countriesArr.length <= 10 && countriesArr.length >= 2) {
                renderMarkupList(refs.countriesUl, countriesArrEdit, markupCountrySearch);
            };
            if (countriesArr.length === 1) {
                renderMarkupList(refs.countryInfo, countriesArrEdit, markupFindElement);
            };
        })
        .catch(onFetchError);    
};

function tooFewLetters() {
    Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
};

function onFetchError() {
  Notiflix.Notify.failure("Oops, there is no country with that name")
};

function clear() {
    refs.countriesUl.innerHTML = '';
    refs.countryInfo.innerHTML = '';
};    



