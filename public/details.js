export const backToMainPageBtn = document.getElementById('back');


const countryName = new URLSearchParams(window.location.search).get('name');

const getCountryByName = async () => {
    const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    try {
        const options = {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            }
        };

        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Failed to fetch data, with status: ${response.status}`)
        }
        const data = await response.json();
        const country = data[0];

        renderCountryDetails(country);

        backToMainPageBtn.addEventListener('click', () => window.location.replace('./index.html')); 

    } catch(err) {
        console.error(`Error fetching country details: ${err}`)
    }
};


// Template for rendering country details
export const renderCountryDetails = (country) => {
    const detailContainer = document.querySelector('.detail-container');
    const detailBox = document.createElement('div');

    let html = '';

    html += `
        <div class="lg:grid lg:grid-cols-[minmax(0,_40%)_minmax(0,_1fr)] gap-16">
            <div class="mb-14 lg:mb-0">
                <img class="object-cover w-full h-full max-w-screen-md2" src="${country.flags.svg}" alt="${country.flags.alt}">
            </div>

            <div class="justify-self-end self-center">
                <h2 class="mb-6 text-2xl font-extrabold lg:text-[2.05rem]">${country.name.common}</h2>

                <div class="mb-9 sm:flex sm:gap-32 lg:mb-12">
                    <div>
                        <ul class="grid gap-3 mb-11 lg:gap-2 lg:mb-0">
                            <li>Native Name: <span class="font-light">${country.name.nativeName[Object.keys(country.name.nativeName)[0]].common}</span></li>
                            <li>Population: <span class="font-light">${country.population.toLocaleString()}</span></li>
                            <li>Region: <span class="font-light">${country.region}</span></li>
                            <li>Sub Region: <span class="font-light">${country.subregion}</span></li>
                            <li>Capital: <span class="font-light">${country.capital}</span></li>
                        </ul>    
                    </div>
                    
                    <div>
                        <ul class="grid gap-3 lg:gap-2">
                            <li>Time Zone<small>(s)</small>:<span class="font-light">${country.timezones.map(timeZone => " " + timeZone).slice(0, 2)}</span></li>
                            <li>Top Level Domain<small>(s)</small>:<span class="font-light">${country.tld.map(tld => " " + tld).slice(0, 2)}</span></li>
                            <li>Currencies: <span class="font-light">${country.currencies[Object.keys(country.currencies)[0]].name}</span></li>
                            <li>Official Language<small>(s)</small>:<span class="font-light">${Object.values(country.languages).map(languageName => ' ' + languageName)}</span></li>
                        </ul>    
                    </div>
                </div>
                
                <div class="lg:flex lg:items-center lg:gap-4">
                    <h4 class="mb-4 lg:mb-0">Border Countries:</h4>
                    <div class="borders flex gap-3 mb-10 text-xs lg:mb-0 lg:text-sm lg:w-[35%]"></div>                           
                </div>
            </div>
        </div>
    `;

    detailBox.innerHTML = html;
    detailContainer.innerHTML = ''; // Clear previous details
    detailContainer.appendChild(detailBox);


    // Accessing, looping through and displaying the country border(s)
    if (country.borders) {
        const borders = country.borders.slice(0, 7);

        let borderHtml = '';

        borders.forEach(border => {
            borderHtml += `
                <a class="py-2 w-full max-w-[6rem] text-center bg-white rounded-md border-country box-shadow dark-transition lg:px-4" href="./border-country-details.html?countrycode=${border}" target="_blank">${border}</a>
            `;
        });

        document.querySelector('.borders').innerHTML = borderHtml;
    } else {
        let borderHtml = '';
        borderHtml += `
            <p class="text-base font-light w-full dark-transition"> No Border<small>(s)</small> Available</p>
        `;

        document.querySelector('.borders').innerHTML = borderHtml;
    };

    
    // Darkmode feature for the border countries (The same logic of the other darkMode in script.js)
    let currentMode = localStorage.getItem('currentmode');

    const darkBtn = document.querySelector('.dark-btn');
    const borderCountries = detailContainer.querySelector('.borders').children;

    const moonIcon = document.getElementById('moon');
    const body = document.body;
    const header = document.querySelector('.header');       
    
    const enableDarkMode = () => {
        for (const borderCountry of borderCountries) {
            borderCountry.classList.add('dark');
        };

        moonIcon.classList.add('dark');
        body.classList.add('dark');
        header.classList.add('dark');

        currentMode = localStorage.setItem('currentmode', 'dark')
    };

    const enableLightMode = () => {
        for (const borderCountry of borderCountries) {
            borderCountry.classList.remove('dark');
        };

        moonIcon.classList.remove('dark');
        body.classList.remove('dark');
        header.classList.remove('dark');

        currentMode = localStorage.setItem('currentmode', 'light')
    };

    if (currentMode === 'dark') {
        enableDarkMode();
    }

    darkBtn.addEventListener('click', () => {
        currentMode = localStorage.getItem('currentmode');

        currentMode!=='dark' ? enableDarkMode() : enableLightMode(); 
    });
};



window.addEventListener('DOMContentLoaded', () => {
    getCountryByName();
});