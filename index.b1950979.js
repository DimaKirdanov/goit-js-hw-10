fetch("https://restcountries.com/v2/name/peru").then((o=>o.json())).then((o=>{console.log(o);countryCardTemplate(o);console.log(o)})).catch((o=>{console.log(o)}));
//# sourceMappingURL=index.b1950979.js.map
