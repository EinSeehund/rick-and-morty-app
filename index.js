import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
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

async function fetchCharacters() {
  try {
    const charactersAPI = await fetch(
      "https://rickandmortyapi.com/api/character",
    );

    if (!charactersAPI.ok) {
      throw new Error("Error:" + charactersAPI.status);
    }

    const characterData = await charactersAPI.json();
    console.log(characterData);
    return characterData;
  } catch (error) {
    return { error: error.message };
  }
}

fetchCharacters();

cardContainer.append(createCharacterCard());
