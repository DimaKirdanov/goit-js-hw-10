
export function markupFindElement({ flags, name, capital, population, languages }) {
  
  return `
        <div class="country-card">
          <img  class="country-flag"
                src="${flags}"
                alt="${name}"
                height="24px"
                width="40px"
                
          />
          <h2 class="country-name">${name}</h2>
        </div>
        <div class="country-description">
        <p class="country-description-key">Capital:</p>
        <p class="country-description-value">${capital}</p>
        </div>
        <div class="country-description">
          <p class="country-description-key">Population:</p>
          <p class="country-description-value">${population}</p>
        </div>
        <div class="country-description">
          <p class="country-description-key">Language:</p>
          <p class="country-description-value">${Object.values(languages).join(', ')}</p>
        </div>
  `   
};
export function renderMarkupList(element, countriesArr, markupCreating) {
    element.innerHTML = countriesArr.map(markupCreating).join(''); 
};

export function markupCountrySearch({ flags, name }) {
    
    return `<li class="item-country">
          <img
            class="item-country-flag"
            src="${flags}"
            alt="${name}"
          
            height="20px"
            width="36px"
          />
          <p class="item-country-name">${name}</p>
        </li>`;
};
