
const filterElement = document.getElementById('filter-element');
const filterBtn = document.getElementById('filter-btn');
const filterContent = document.getElementById('regions');
const arrowUp = document.querySelector('.arrow-icon');

// Toggle filter content
filterBtn.addEventListener('click', () => {
    filterContent.classList.toggle('opacity-0');
    filterContent.classList.toggle('pointer-events-none');
    arrowUp.classList.toggle('rotate');
    const isExpanded = filterBtn.getAttribute('aria-expanded') === 'true';  // Gets a boolean response, so it can be assigned to the aria attributes
    filterBtn.setAttribute('aria-expanded', !isExpanded); 
    filterContent.setAttribute('aria-hidden', isExpanded);
});

// Shows content when user hover on the element
filterElement.addEventListener('mouseenter', () => {
    filterContent.classList.remove('opacity-0');
    filterContent.classList.remove('pointer-events-none');
    arrowUp.classList.add('rotate');
    filterBtn.setAttribute('aria-expanded', 'true'); 
    filterContent.setAttribute('aria-hidden', 'false');
});

// Hides content when user hover off the element
filterElement.addEventListener('mouseleave', () => {
    // Checks if the mouse is on the displayed content; keeps displaying if true and hides content if false.
    if (!isMouseOnContent(filterContent)) {
        filterContent.classList.add('opacity-0');
        filterContent.classList.add('pointer-events-none');
        arrowUp.classList.remove('rotate');
        filterBtn.setAttribute('aria-expanded', 'false'); 
        filterContent.setAttribute('aria-hidden', 'true');
    };

    // Hides the content when mouse leaves the displayed content
    filterContent.addEventListener('mouseleave', () => {
        if (!isMouseOnContent(filterContent)) {
            filterContent.classList.add('opacity-0');
            filterContent.classList.add('pointer-events-none');
            arrowUp.classList.remove('rotate');
            filterBtn.setAttribute('aria-expanded', 'false'); 
            filterContent.setAttribute('aria-hidden', 'true');
        };
    });
});


// Function to check if the mouse is on the content
function isMouseOnContent (element) {
    const rect = element.getBoundingClientRect();
    return (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
    );
};



// Scroll to top function
const scrollUpBtn = document.getElementById('scrollToTopBtn');

const scrollPageToTop = () => {
    document.body.scrollTop = 0; // For safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, Internet explorer and Opera mini
};

scrollUpBtn.addEventListener('click', scrollPageToTop);


//  Show button on scroll
const toggleScrollToTopBtn = () => {
    if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500) {
        scrollUpBtn.classList.remove('hidden');
    } else {
        scrollUpBtn.classList.add('hidden');
    }
};

window.onscroll = toggleScrollToTopBtn;



// Function to highlight matching words
function highlightMatchingWords(name, search) {
    const regex = new RegExp(`(${search})`, 'gi');
    return name.replace(regex, '<span class="highlight">$1</span>');
};


// Populate the homepage with countries data
const populateHomepage = async () => {
    try {
        let url = 'https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,';

        const options = {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            }
        };

        const response = await fetch(url, options)

        if (!response.ok) {
            throw new Error(`API failed to fetch, with status: ${response.status}`)
        }

        const data = await response.json();

        // Sorted the countries alphabetically based on the country name
        data.sort((a, b) => {
            const nameA = a.name.common.toUpperCase(); // Ensure case-insensitive comparison
            const nameB = b.name.common.toUpperCase();
          
            if (nameA < nameB) return -1; // nameA comes before nameB
            if (nameA > nameB) return 1;  // nameB comes before nameA

            // names are equal
            return 0;
        });

        data.forEach(country => {
            // List of needed data
            const flag = country.flags.svg;
            const name = country.name.common;
            const population = country.population;
            const region = country.region;
            const capital = country.capital;

            
            const countryContainer = document.querySelector('.country-container');
            const countryCard = document.createElement('a');
            countryCard.href = `./details.html?name=${name}`;
            countryCard.target = '_blank';
            countryCard.className = 'country-card bg-white w-[80%] max-w-[353px] mx-auto pb-10 md:hover:scale-105 md:w-full md:mx-0'
        
            let html = '';
            html += `
                <div>                  
                    <div style="background-image: url('${flag}');" class="mb-6 bg-cover bg-top bg-no-repeat h-[170px] w-full rounded-t-md"></div>

                    <div class="px-7">
                        <h3 class="name text-lg font-extrabold mb-4">${name}</h3>

                        <ul class="grid gap-1">
                            <li> <span class="font-semi-bold">Population:</span> <span class="font-light">${population.toLocaleString()}</span> </li>
                            <li> <span class="font-semi-bold">Region:</span> <span class="region font-light">${region}</span> </li>
                            <li> <span class="font-semi-bold">Capital:</span> <span class="font-light">${capital}</span> </li>
                        </ul>
                    </div> 
                </div>
            `;

            countryCard.style.transition = 'all 0.5s ease';
            countryCard.style.boxShadow = '0 1px 6px  rgba(0, 0, 0, 0.1)';
            countryCard.style.borderRadius = '0.375rem';
            countryCard.innerHTML = html;
            countryContainer.appendChild(countryCard);


            // Shows all countries
            const showAllBtn = document.getElementById('all');
            showAllBtn.addEventListener('click', () => countryCard.style.display = 'initial');

            //  Filter countries by region
            const regionBox = document.getElementById('regions');
            const regionsInHtml = regionBox.querySelectorAll('.region-btn');
            
            regionsInHtml.forEach(regionInHtml => {
                regionInHtml.addEventListener('click', () => {

                    const regionText = regionInHtml.textContent;

                    if (regionText.toLowerCase().indexOf(region.toLowerCase()) === -1) {
                        countryCard.style.display = 'none';
                    } else {
                        countryCard.style.display = 'initial';
                    }
                });
            });
        });

       

        // Toggles dark mode and save current color/theme mode to localStorage
        let currentMode = localStorage.getItem('currentmode');

        const darkBtn = document.querySelector('.dark-btn');
        const countryContainer = document.querySelector('.country-container');
        const countryCards = countryContainer.children;

        const moonIcon = document.getElementById('moon');
        const arrowIcon = document.getElementById('arrow');
        const body = document.body;
        const header = document.querySelector('.header');
        const input = document.querySelector('input');
        const filterBox = document.getElementById('filter-element');
        const regionBox = document.getElementById('regions');
        const regionTitles = document.querySelectorAll('.regionn');


        const enableDarkMode = () => {
            moonIcon.classList.add('dark');
            arrowIcon.classList.add('dark');
            body.classList.add('dark');
            header.classList.add('dark');
            input.classList.add('dark');
            filterBox.classList.add('dark');
            regionBox.classList.add('dark');
            regionTitles.forEach(regionTitle => regionTitle.classList.add('dark'));

            for (const card of countryCards) {
                card.classList.add('dark')
            };

            currentMode = localStorage.setItem('currentmode', 'dark');
        };
        
        const enableLightMode = () => {
            moonIcon.classList.remove('dark');
            arrowIcon.classList.remove('dark');
            body.classList.remove('dark');
            header.classList.remove('dark');
            input.classList.remove('dark');
            filterBox.classList.remove('dark');
            regionBox.classList.remove('dark');
            regionTitles.forEach(regionTitle => regionTitle.classList.remove('dark'));

            for (const card of countryCards) {
                card.classList.remove('dark')
            };

            currentMode = localStorage.setItem('currentmode', 'light');
        };


        // Automatically sets the theme mode to dark if the localStorage currentmode is set to dark
        if (currentMode === 'dark') {
            enableDarkMode();
        };

        darkBtn.addEventListener('click', () => {
            currentMode = localStorage.getItem('currentmode');

            // Ternary operator that runs the dark/light function after checking the currentmode
            currentMode !== 'dark' ? enableDarkMode() : enableLightMode();
        });


        
        // Country Search function
        const searchCountry = (searchText) => { 
            const countryCards = document.querySelectorAll('.country-card');
     
            countryCards.forEach((countryCard) => {
                const countryNameElement = countryCard.querySelector('.name');
                const countryName = countryNameElement.textContent;

                if (countryName.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
                    countryCard.style.display = 'none';
                } else {
                    // Reset background color before highlighting
                    countryNameElement.innerHTML = countryName;
                    
                    // Highlighted matching words
                    const highlightedText = highlightMatchingWords(countryName, searchText);

                    // Applied the highlighted text to the countryCard
                    countryNameElement.innerHTML = highlightedText;

                    countryCard.style.display = 'initial';
                }; 
            });
        };

        input.addEventListener('keyup', () => {
            const searchText = input.value.trim();
            searchCountry(searchText);
        });

    } catch (err) {
        console.error(`Error fetching country details: ${err}`)
    }
};



const input = document.querySelector('input');

window.addEventListener('DOMContentLoaded', () => {
    populateHomepage();

    // Clear input
    input.value = '';
});
