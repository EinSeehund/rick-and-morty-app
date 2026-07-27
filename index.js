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
let maxPage = 1;
let page = 1;
const searchQuery = "";

prevButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (page > 1) {
        page--;
        fetchCharacters();
    }
});

nextButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (page < maxPage) {
        page++;
        fetchCharacters();
    }
});

// API fetch call
async function fetchCharacters() {
    try {
        const response = await fetch(
            `https://rickandmortyapi.com/api/character?page=${page}`,
        );

        if (!response.ok) {
            throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }

        const data = await response.json();
        maxPage = data.info.pages;
        pagination.textContent = `${page} / ${maxPage}`;
        const characterArray = data.results;
        cardContainer.innerHTML = "";
        characterArray.forEach((character) => {
            cardContainer.append(createCharacterCard(character));
        });

        //return data;
    } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
        throw error; // Fehler weiterreichen, falls die aufrufende Funktion ihn braucht
    }
}

fetchCharacters();
