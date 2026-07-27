import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";


const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";


// API FETCH
async function fetchCharacters() {
  const response = await fetch("https://swapi.tech/api/people");
  const data = await response.json();

  cardContainer.innerHTML = "";

  data.results.forEach((character) => {
    const characterCard = createCharacterCard(character);
    cardContainer.append(characterCard);
  });

  console.log(data);
}

fetchCharacters();

// 02 CREATE CARD
// const characterCard = createCharacterCard();
// cardContainer.append(characterCard);

