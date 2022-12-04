fetch("https://restcountries.com/v2/name/peru").then((function(n){return n.json()})).then((function(n){console.log(n),countryCardTemplate(n),console.log(n)})).catch((function(n){console.log(n)}));
//# sourceMappingURL=index.91eab823.js.map
