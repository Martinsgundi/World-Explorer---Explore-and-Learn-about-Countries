# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot



![Desktop Preview](./public/assets/screenshot/desktop-preview.jpg)


![Mobile design-detail-dark](./public/assets/screenshot/mobile-design-detail-dark.jpg)



### Links

- Solution URL: [Check out my solution on Front end mentor](https://www.frontendmentor.io/solutions/world-explorer-explore-and-learn-about-countries-FqZQxES6ie)
- Live Site URL: [Check out the live site](https://gundi-world-explorer.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Tailwindcss
- Vanilla JavaScript
- Mobile-first workflow

### What I learned

1. Enhancing Search Filters with Regular Expressions:
  Embracing regular expressions for search filters provided a robust and flexible approach compared to basic string matching techniques like `indexOf` or `includes`. Regular expressions empowered me to define intricate patterns, enabling a more versatile and powerful matching mechanism.

2.  Dynamic Sorting of Countries by Name:
  I learned an effective technique for dynamically sorting the list of countries fetched from the API based on their names. Leveraging the `Array.prototype.sort` method and a custom comparison function, I successfully organized the countries alphabetically. This illuminated the power of JavaScript's array manipulation methods and their application in dynamically enhancing the display of information on a web page.

3. Persistent User Preferences with Local Storage:
  I discovered the significance of using local storage to save and retrieve user color theme preferences. This feature not only enhances user experience by maintaining their chosen theme across sessions but also showcases the capability of web storage for client-side data persistence.

4. Navigating Objects with the `for...of Loop`:
  Utilizing the `for...of Loop` for iterating through objects offered a concise and effective method for handling object properties. This knowledge streamlined the process of traversing object structures, contributing to cleaner and more readable code.

5. Simplified Number Formatting with `toLocaleString()`:
  I learned an efficient way to add commas between numbers in JavaScript using the toLocaleString() method. This method provides a concise alternative to the manual and lengthy approach, improving code readability and maintainability.

6. Asynchronous Handling of Dynamic API Content:
  Understanding the role of `async` and `await` was pivotal in managing dynamic content fetched from APIs seamlessly. Leveraging these features enhanced the functionality of my project, ensuring a smoother and more responsive user experience when dealing with asynchronous operations.

7. The Art of Patience and Problem-Solving:
  Through practical experience, I cultivated the habit of taking short breaks when faced with challenges. I observed that stepping away and returning with a fresh perspective allowed me to approach issues differently, fostering more effective bug resolution. This practice highlighted the importance of patience and resilience in problem-solving.

  In summary, my journey involved mastering advanced search techniques, optimizing user experience with local storage, adopting efficient coding practices, and developing a resilient mindset in the face of challenges. Each lesson contributes to a more comprehensive skill set and a refined approach to web development.


### Continued development

As I embark on the next phase of my programming journey, I am enthusiastic about delving into the realm of JavaScript frameworks, with React taking the spotlight. The motivation behind this exploration is to harness the power of modern frameworks, leveraging their capabilities to write more efficient, reusable, and succinct code. This strategic move aims to streamline development processes, ultimately enhancing productivity and minimizing the duration from development to product launch.

The decision to embrace React is driven by its reputation for promoting the creation of modular and maintainable code. React's component-based architecture offers a paradigm shift, allowing me to design interactive and dynamic user interfaces with ease. The promise of reusability aligns seamlessly with the best practices I've cultivated so far, promising a more streamlined and organized codebase.

In summary, the decision to explore React is a strategic move aimed at elevating my programming proficiency. Through this journey, I anticipate honing my skills in crafting efficient and elegant solutions, fostering a continuous evolution of my development expertise.


### Useful resources

- [Kevin Powell's light/dark toggle with CSS & JS](https://www.youtube.com/watch?v=wodWDIdV9BY) - This helped me with the logic to save and retrieve user color theme preferences using local storage.


## Author

- Linkedin - [Martins Ogundipe](https://www.linkedin.com/in/martinsgundi)
- Frontend Mentor - [Martinsgundi](https://www.frontendmentor.io/profile/Martinsgundi)
- Twitter - [Martinsgundi1](https://www.twitter.com/martinsgundi1)