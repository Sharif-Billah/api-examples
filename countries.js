const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
};
loadCountries();

const displayCountries = countries => {
    // for (const country of countries) {
    //     console.log(country)
    // }
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        div.innerHTML = `
        <h3>Name : ${country.name}</h3>
        <p>Capital : ${country.capital}</p>
        <button onclick ="loadCountryByName('${country.name}')">Details</button>
        `

        countriesDiv.appendChild(div);
    })
}

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountriesDetail(data[0]))
};

const displayCountriesDetail = country => {
    console.log(country)
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
    <h5>${country.name}</h5>
    <p>population : ${country.population}</P>
    <img width="200px" src="${country.flag}">
    `
}