import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { NavPagination } from "./components/NavPagination/NavPagination.js";
import { NavButton } from "./components/NavButton/NavButton.js";
import { SearchBar } from "./components/SearchBar/SearchBar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
    '[data-js="search-bar-container"]',
);

searchBarContainer.append(SearchBar(handleQuery));

const navigation = document.querySelector('[data-js="navigation"]');
navigation.append(NavButton("previous", "button--prev", handlePrevButton));
navigation.append(NavPagination());
navigation.append(NavButton("next", "button--next", handleNextButton));
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

// Event handlers
function handleNextButton() {
    if (page < maxPage) {
        page++;
        fetchCharacters();
    }
}
function handlePrevButton() {
    if (page > 1) {
        page--;
        fetchCharacters();
    }
}
function handleQuery(event) {
    event.preventDefault();
    // OVER ENGINEERED
    //const data = new FormData(event.target);
    //searchQuery = data.get("query");
    searchQuery = event.target.query.value;
    page = 1;
    fetchCharacters();
}

// API fetch call
export async function fetchCharacters() {
    try {
        cardContainer.innerHTML = "";
        const response = await fetch(
            `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`,
        );

        if (!response.ok) {
            throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data.results);
        maxPage = data.info.pages;
        const characterArray = data.results;
        characterArray.forEach((character) => {
            cardContainer.append(createCharacterCard(character));
        });

        pagination.textContent = `${page} / ${maxPage}`;

        //return data;
    } catch (error) {
        cardContainer.textContent = "No results";
        console.error("Fehler beim Abrufen der Daten:", error);
        throw error; // Fehler weiterreichen, falls die aufrufende Funktion ihn braucht
    }
}

fetchCharacters();
