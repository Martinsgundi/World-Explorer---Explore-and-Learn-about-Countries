import { backToMainPageBtn, renderCountryDetails } from "./details.js";


const countryCode = new URLSearchParams(window.location.search).get('countrycode');

const getCountryByCode = async () => {
    try {
        const url = `https://restcountries.com/v3.1/alpha/${countryCode}`;

        const options = {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            }
        };

        const response = await fetch(url, options);
        const data = await response.json();
        const country = data[0];
        
        renderCountryDetails(country);

        backToMainPageBtn.addEventListener('click', () => window.location.replace('/public/index.html'))

    } catch(err) {
        console.error(`Error fetching country details: ${err}`);
    }
};


window.addEventListener('DOMContentLoaded', () => {
    getCountryByCode();
});