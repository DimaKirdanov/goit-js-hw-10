import './css/styles.css';

const DEBOUNCE_DELAY = 300;


fetch('https://restcountries.com/v2/name/peru').then((response) => {
    return response.json();
}).then((country) => {
    console.log(country);
    const markup = countryCardTemplate(country);
    console.log(country);
}).catch((error) => { 
    console.log(error);
});


